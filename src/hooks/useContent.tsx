import * as PL from '../constants/pl';

type ContentType = typeof PL;

interface ContentResult {
    content: ContentType;
}

export const useContent = (): ContentResult => {
    return { content: PL };
};
