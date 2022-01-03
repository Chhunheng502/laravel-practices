

interface UserData {
    user: {
        id: number
        name: string
        gender: string
        passed: boolean
        address: {
            country: string
            city: string
            postalCode: number
        }
    }
}

export const userStore = {
    state: {
        users: [] as UserData[]
    },

    deleteUser(user: UserData) {
        console.log(user)
    }
}