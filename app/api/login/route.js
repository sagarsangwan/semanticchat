// export default function handler(req, res) {
//     console.log(req.method)
//     if (req.method === "POST") {
//         return res.status(200).json({ name: "John Doe" })
//     }
//     else if (req.method === "GET") {
//         return res.status(200).json({ name: "John Doe" })
//     }
//     res.status(200).json({ name: "John Doe" })
// }

// export a get method
export async function GET(req) {
    console.log(req.method)
    const hihih = req
    // return a response
    return Response.json({ name: "John Doe", method: hihih })
}

// export async function 