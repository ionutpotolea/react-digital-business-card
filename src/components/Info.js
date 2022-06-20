import React from "react"
import personImg from "../img/ionut-potolea.jpg"
import mailImg from "../img/mail.svg"
import linkedInImg from "../img/linkedIn.svg"

export default function Info() {
    return (
        <div>
            <div className="img-container">
                <img src={personImg} className="card--info--img"/>
            </div>
            <div className="card--padding card--align-center">
                <h2 className="card--info--name">Ionut Potolea</h2>
                <p className="card--info--title">Frontend Developer</p>
                <p className="card--info--website">
                    <a href="https://ionutpotolea.github.io/portfolio">ionutpotolea.github.io/portfolio</a>
                </p>
                <div className="btns">
                    <a
                        className="btn card--info--btn card--info--btn__primary"
                        href="mailto:ionut.potolea@gmail.com"
                    >
                        <div className="btn-content-flex">
                            <img src={mailImg}/>
                            <span>Email</span>
                        </div>
                    </a>
                    <a
                        className="btn card--info--btn card--info--btn__secondary"
                        href="https://www.linkedin.com/in/ionutpotolea/"
                    >
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