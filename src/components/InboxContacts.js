import React from 'react'
import Contact from './Contact'
import Search from './Search'

const InboxContacts = () => {
    return (
        <div className="inbox_people">

            <Search />

            <div className="inbox_chat">

                <Contact />

                <div className="extra_space"></div>

            </div>
        </div>
    )
}

export default InboxContacts