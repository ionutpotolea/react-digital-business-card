import React from "react"
import twitterImg from "../img/twitter.svg"
import facebookImg from "../img/facebook.svg"
import instagramImg from "../img/instagram.svg"
import githubImg from "../img/github.svg"

export default function Footer() {
    return (
        <div className="card--footer card--align-center">
            <a href="#"><img className="card--footer-icon" src={twitterImg} /></a>
            <a href="#"><img className="card--footer-icon" src={facebookImg} /></a>
            <a href="#"><img className="card--footer-icon" src={instagramImg} /></a>
            <a href="#"><img className="card--footer-icon" src={githubImg} /></a>
        </div>
    )
}