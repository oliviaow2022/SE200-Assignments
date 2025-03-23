import { db } from '@/db'

export default function EditExpenses({params}){
  async function updateExpenseItem(formData: FormData){
    "use server";
    const item = formData.get("item") as string;
    const description = formData.get("description") as string;
    const id = Number(params.id);

    const updateItem = await db.expenseItem.update({
      where: { id },
      data: { item, description },
    })
  }
    return (
        <>
        <form action={updateExpenseItem}>
        <h1>Update an Expense Item</h1>
        <label>Item:</label>
        <input name="item" id="item" />
        <br />
        <label>Description:</label>
        <textarea name="description" id="description" />
        <br />
        <button type="submit">Update Expense Item</button>
      </form>
        </>
      );
}