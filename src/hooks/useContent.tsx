import { useLanguage } from '../i18n/context';
import type { SiteContent } from '../i18n/types';

interface ContentResult {
    content: SiteContent;
}

export const useContent = (): ContentResult => {
    const { content } = useLanguage();
    return { content };
};
