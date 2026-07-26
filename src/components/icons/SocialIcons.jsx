export function InstagramIcon({ size = 24, ...props }) {

    return (

        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <rect
                x="2"
                y="2"
                width="20"
                height="20"
                rx="5"
                ry="5"
            />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line
                x1="17.5"
                x2="17.51"
                y1="6.5"
                y2="6.5"
            />
        </svg>

    );

}

export function FacebookIcon({ size = 24, ...props }) {

    return (

        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>

    );

}

export function TikTokIcon({ size = 24, ...props }) {

    return (

        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="none"
            {...props}
        >
            <path d="M16.6 5.82c-.7-.77-1.09-1.77-1.09-2.82h-3.02v13.44c0 1.5-1.22 2.72-2.72 2.72a2.72 2.72 0 0 1 0-5.44c.28 0 .55.04.8.12V10.7a5.7 5.7 0 0 0-.8-.06 5.75 5.75 0 1 0 5.75 5.75V8.87a8.7 8.7 0 0 0 5.08 1.62V7.47a5.66 5.66 0 0 1-3.99-1.65z" />
        </svg>

    );

}
