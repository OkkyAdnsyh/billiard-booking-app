export async function POST(req: Request, res: Response) {
    const body = req.body;

    return Response.json({body})
}