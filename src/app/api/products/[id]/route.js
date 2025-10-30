import products from '../../../data/products.json';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const id = req.url.split('/').pop(); // get last part of URL
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return new Response(JSON.stringify({ message: 'Product not found' }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify(product), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
