export interface portfolio {
    id: string,
    caption: string, 
    likeCount: number,
    mediaType: string,
    mediaUrl: string,
    timestamp: string
}

export interface portfolioModal {
    open: boolean,
    caption?: string, 
    likeCount?: number,
    mediaType?: string,
    mediaUrl?: string,
    timestamp?: string
}

export interface portfolioState {
    portfolioList: portfolio[],
    portfolioModal: portfolioModal
}
