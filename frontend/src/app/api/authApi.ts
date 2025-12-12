import $api from "./axios";
export async function login(email:string, password: string) {
    const res = await $api.post("/login", {email, password});
    return res.data
}

export async function profile() {
    const res = await $api.get("/profile");
    return res.data
}
