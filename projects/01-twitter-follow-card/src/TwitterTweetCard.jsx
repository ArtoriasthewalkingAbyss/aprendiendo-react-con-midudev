import { useState } from 'react'

export function TwitterTweetCard ({ children, userName}) {

    return (
        <article className='tw-TweetCard'>
            <header className='tw-TweetCard-header'>
                <img
                    className='tw-TweetCard-avatar'
                    alt={`El avatar de ${userName}`}
                    src={`https://unavatar.io/${userName}`} />
            
                <div className="tw-TweetCard-info">
                    <strong>{children}</strong>
                
                    <span className="tw-TweetCard-infoUserName">@{userName}</span>
                </div>
            </header>

            <aside>
                <p>holi</p>
            </aside>
        </article>
    )
}