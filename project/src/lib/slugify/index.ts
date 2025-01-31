import slugify from 'slugify';

export function generateSlug(text: string): string {
    return (
        slugify(text, {
            lower: true, // convert to lowercase
            strict: true, // remove special characters
            trim: true, // trim leading/trailing whitespace
            locale: 'en', // language rules
        }) +
        '-' +
        Date.now()
    ); // add timestamp for uniqueness
}
