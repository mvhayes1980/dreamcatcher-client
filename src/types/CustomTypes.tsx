export type DreamType = {
        content: string,
        category: string,
        userId?: number,
        isNSFW: boolean,
        title: string,
        id?: number
}
export type CommentType = {
        content: string,
        dreamId?: number,
        userId?: number,
        id?: number
}

export type UserType = {
        username: string,
        profilePic: string,
        nsfwOk: boolean,
        isAdmin: boolean,
        dreams: DreamType[],
        comments: CommentType[],
        id: number
}