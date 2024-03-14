export type Visitante = {
    id: string
    amount: string
    status: "pending" | "processing" | "success" | "failed"
    name: string
    email: string
}