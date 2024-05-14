export async function getVans(id) {
    const url = id ? `/api/vans/${id}` : '/api/vans' 
    const res = await fetch(url)
    
    if (!res.ok) {
        throw new Error("Failed to fetch vans")
    }

    const data = await res.json()
    return data.vans
}

export async function getHostVans(id) {
    const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
    const res = await fetch(url)

    if(!res.ok) {
        throw new Error("Failed to fetch host vans")
    }

    const data = await res.json()
    return data.vans
}
