function TwitterHeaderMenu ({icon, link, name}) {
    return (
        <a href={link} aria-label="Inicio (nuevos Tweets sin leer)" role="link" className="" data-testid="AppTabBar_Home_Link">
            <div>
                <div>
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="tw-icon">
                        <g>
                            <path d={icon}>
                            </path>
                        </g>
                    </svg>
                
                </div>

                <div dir="ltr" className="css-901oao css-1hf3ou5 r-1nao33i r-1qd0xha r-adyw6z r-b88u0q r-135wba7 r-1joea0r r-88pszg r-bcqeeo r-qvutc0">
                    <span className="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0">{name}</span>
                </div>
            </div>
        </a>
    )
}

export {TwitterHeaderMenu}
