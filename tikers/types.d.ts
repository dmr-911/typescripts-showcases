export type Video = {
    caption : string,
    video : {
        asset : {
            _id : string,
            url: string
        }
    },
    comments: {
        comment : string,
        postedBy : {
            _id: string
        },
        _key: string
    }[],
    likes : {
        _key : string,
        _ref : string,
        _type : string
    },
    postedBy : {
        image : string,
        userName : string,
        _id : string
    },
    userId : string,
    _id : string
}