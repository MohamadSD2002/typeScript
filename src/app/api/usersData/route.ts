interface DataItem {
    id: number;
    name: string;
    age: number;
    address: string;
  }

export async function GET(request: Request): Promise<Response> {
  const data : DataItem[] = [
    { id: 1, name: "behroz", age: 32, address: "10 Downing Street" },
    { id: 2, name: "Meysam", age: 42, address: "20 Downing Street" },
    { id: 3, name: "Mohamad", age: 22, address: "30 Downing Street" },
    { id: 4, name: "Leila", age: 33, address: "40 Downing Street" },
  ];

  return Response.json({
    data,
  });
}
