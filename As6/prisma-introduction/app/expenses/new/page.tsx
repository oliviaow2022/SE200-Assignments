import { db } from "../../../db";

export default function Page() {
  async function createExpenseItem(formData: FormData) {
    "use server";
    const item = formData.get("item") as string;
    const description = formData.get("description") as string;

    const expenseItem = await db.expenseItem.create({
      data: {
        item,
        description,
      },
    });
  }

  return (
    <>
      <form action={createExpenseItem}>
        <h1>Create an Expense Item</h1>
        <label>Item:</label>
        <input name="item" id="item" />
        <br />
        <label>Description:</label>
        <textarea name="description" id="description" />
        <br />
        <button type="submit">Create Expense Item</button>
      </form>
    </>
  );
}
