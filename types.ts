export enum SlideType {
    COVER = 'COVER',
    LIST = 'LIST',
    CONTENT_IMAGE = 'CONTENT_IMAGE',
    PERSONA = 'PERSONA',
    DIAGRAM = 'DIAGRAM',
    GRID = 'GRID',
    CHART = 'CHART',
    CLOSING = 'CLOSING'
}

export interface SlideData {
    id: number;
    title: string;
    subtitle?: string;
    type: SlideType;
    content?: any;
}