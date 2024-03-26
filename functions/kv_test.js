export async function onRequest(context) {
  const task = await context.env.pages_kv.get("Task:123");
  return new Response(task);
}