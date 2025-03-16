-- Question 1
select * from
(select concat(e.first_name, ' ', e.last_name) as full_name, o.ship_country, 
sum((od.unit_price * od.quantity) * (1- od.discount)) as total_order_value, rank() over ( PARTITION by o.ship_country order by sum((od.unit_price * od.quantity) * (1- od.discount)) desc )  as country_rank 
from employees e full join orders o 
on e.employee_id = o.employee_id 
full join order_details od 
on o.order_id = od.order_id
group by o.ship_country, e.first_name, e.last_name) as sub
where country_rank <= 3;

-- Question 2
with category_sales as (select c.category_id, c.category_name , sum((od.unit_price * od.quantity) * (1- od.discount)) as total_category_sales
from products p full join order_details od 
on od.product_id = p.product_id
full join categories c 
on p.category_id = c.category_id
group by c.category_id),
overall_sales as ( select sum((od.unit_price * od.quantity) * (1 - od.discount)) as total_overall_sales
FROM order_details od),
product_sales as (select p.product_name, c.category_name, sum((od.unit_price * od.quantity) * (1- od.discount)) as total_sales 
from products p full join order_details od 
on od.product_id = p.product_id
full join categories c 
on p.category_id = c.category_id
group by p.product_name, c.category_name)
select ps.product_name, ps.category_name, ps.total_sales,
ps.total_sales, 
(ps.total_sales / cs.total_category_sales) * 100 as category_percentage, 
(ps.total_sales / os.total_overall_sales) * 100 as overall_percentage
from product_sales ps full join category_sales cs on cs.category_name = ps.category_name
cross join overall_sales os
order by cs.category_name;

-- Question 3
-- idk.
with category_count as (select count(distinct category_id) as total_categories from categories)
select s.company_name,  count(distinct ca.category_id) as categories_ordered
from customers c join orders o on c.customer_id = o.customer_id
join order_details od on o.order_id = od.order_id
join products p on p.product_id = od.product_id
join categories ca on ca.category_id = p.category_id
join suppliers s on s.supplier_id = p.supplier_id
group by s.company_name	
order by categories_ordered desc;
having count(distinct ca.category_id) = (select total_categories from category_count);

-- Question 4

SELECT 
    CONCAT(e.first_name, ' ', e.last_name) AS full_name,
    o.order_date,
    SUM(od.unit_price * od.quantity * (1 - od.discount)) AS total_order_value,
    AVG(SUM(od.unit_price * od.quantity * (1 - od.discount))) 
        OVER (PARTITION BY e.employee_id ORDER BY o.order_date ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) AS moving_avg
FROM employees e
JOIN orders o ON e.employee_id = o.employee_id
JOIN order_details od ON o.order_id = od.order_id
GROUP BY e.employee_id, o.order_date
ORDER BY e.first_name, o.order_date;

-- Question 5

WITH product_sales AS (
    SELECT 
        p.product_name,
        c.category_name,
        SUM(od.unit_price * od.quantity * (1 - od.discount)) AS total_sales
    FROM products p
    JOIN order_details od ON p.product_id = od.product_id
    JOIN categories c ON p.category_id = c.category_id
    GROUP BY p.product_name, c.category_name
),
ranked_products AS (
    SELECT 
        ps.product_name,
        ps.category_name,
        ps.total_sales,
        PERCENT_RANK() OVER (PARTITION BY ps.category_name ORDER BY ps.total_sales DESC) AS percentile_rank
    FROM product_sales ps
)
SELECT 
    rp.product_name,
    rp.category_name,
    rp.total_sales,
    rp.percentile_rank * 100 as percentile_rank
FROM ranked_products rp
WHERE rp.percentile_rank <= 0.25
ORDER BY rp.category_name, rp.total_sales DESC;
