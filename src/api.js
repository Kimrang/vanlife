export async function getVans() {
    const res = await fetch("/api/vans")
    if (!res.ok) {
        throw new Error("Failed to fetch vans")
    }

    const data = await res.json()
    return data.vans
}

export async function getHostVans() {
    const res = await fetch("/api/host/vans")
    if(!res.ok) {
        throw new Error("Failed to fetch host vans")
    }

    const data = await res.json()
    return data.vans
}

export async function getHostVan(id) {
    const res = await fetch(`/api/host/vans/${id}`)
    if(!res.ok) {
        throw new Error("Failed to fetch van")
    }

    const data = await res.json()
    return data.vans
}