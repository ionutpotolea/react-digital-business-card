import React from "react"
import lauraSmithImg from "../img/laura-smith.jpg"
import mailImg from "../img/mail.svg"
import linkedInImg from "../img/linkedIn.svg"

export default function Info() {
    return (
        <div>
            <img src={lauraSmithImg} className="card--info--img"/>
            <div className="card--padding card--align-center">
                <h2 className="card--info--name">Laura Smith</h2>
                <p className="card--info--title">Frontend Developer</p>
                <p className="card--info--website">laurasmith.website</p>
                <div className="btns">
                    <a className="card--info--btn card--info--btn__primary" href="#">
                        <div className="btn-content-flex">
                            <img src={mailImg}/>
                            <span>Email</span>
                        </div>
                    </a>
                    <a className="card--info--btn card--info--btn__secondary" href="#">
                        <div className="btn-content-flex">
                            <img src={linkedInImg}/>
                            <span>LinkedIn</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}