import React from 'react'
import DefaultAva from '../../img/icon-profile-cgv.png'
export default function DefaultAvatar({avatar}) {
    return (
        <img src = {!avatar ? DefaultAva : avatar} />
    )
}
