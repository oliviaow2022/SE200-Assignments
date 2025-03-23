import { db } from '@/db'
import Link from 'next/link'
import { redirect } from 'next/navigation';

export default async function DeleteExpenses({ params }) {
    const id = Number(params.id);
    const expenseItem = await db.expenseItem.findUnique({
        where: { id },
    });

    if (!expenseItem) {
        redirect('/');
    }


    async function deleteExpenseItem(formData: FormData) {
        "use server";
        const id = Number(params.id);

        const deleteItem = await db.expenseItem.delete({
            where: { id },
        })
        redirect('/');
    }

    return (
        <>
            <h1>Are you sure you want to delete {expenseItem.item}?</h1>
            <form method="get" action="/">
                <button type="submit">No</button>
            </form>
            <form method="get" action={deleteExpenseItem}>
                <button type="submit">Yes</button>
            </form>
        </>
    );
}