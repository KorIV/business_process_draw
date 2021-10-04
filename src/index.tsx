import React from "react";
import { ReactDOM } from "react";

const App = () => 
    <>
    <nav className="main-nav">
                <ul className="main-nav-list">
                    <li className="main-nav-item">
                        <a className="main-nav-link">File</a>
                        <ul className="subnav-list">
                            <li className="subnav-item">New Project</li>
                            <li className="subnav-item">New Layer</li>
                            <li className="subnav-item">Save Project</li>
                        </ul>
                    </li>
                    <li className="main-nav-item">Edit</li>
                </ul>
            </nav>
            <div className="main-app">
                <div className="left-sidebar">
                    <div className="layers-menu">
                        <span className="sidebar-title">Слои</span>
                        <ul className="layers-list">
                            <li className="layers-item">
                                <span className="layer-title active parent expanded">First Layer</span>
                                <ul className="sublayers-list">
                                    <li className="sublayers-item">
                                        <span className="layer-title">Sublayer 1</span>
                                    </li>
                                    <li className="sublayers-item">
                                        <span className="layer-title">Sublayer 2</span>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="blocks-menu">
                        <span className="sidebar-title">Блоки</span>
                        <ul className="blocks-list">
                            <li className="blocks-item">
                                <svg style="left: 1px; top: 1px; width: 64px; height: 60px; display: block; position: relative; overflow: hidden;"><g><g></g><g><g style="visibility: visible;" transform="translate(0.5,0.5)"><rect x="1.44" y="7.68" width="57.6" height="28.8" fill="#ffffff" stroke="#000000" stroke-width="1.3" pointer-events="all"></rect></g></g><g></g><g></g></g></svg>
                                <div className="tooltip block-tooltip">
                                    <p className="tooltip-text">
                                        Базовый процесс
                                    </p>
                                </div>
                            </li>
                            <li className="blocks-item">
                                <svg style="left: 1px; top: 1px; width: 64px; height: 60px; display: block; position: relative; overflow: hidden;"><g><g></g><g><g style="visibility: visible;" transform="translate(0.5,0.5)"><rect x="0.73" y="7.3" width="29.2" height="14.6" fill="none" stroke="white" pointer-events="stroke" visibility="hidden" stroke-width="9"></rect><rect x="0.73" y="7.3" width="58.4" height="29.2" fill="none" stroke="none" pointer-events="all"></rect></g><g style=""><g transform="translate(6,10)scale(0.73)"><foreignObject style="overflow:visible;" pointer-events="all" width="26" height="12"><div style="display: inline-block; font-size: 14px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; vertical-align: top; width: 54px; white-space: normal; overflow-wrap: normal; text-align: center;"><div xmlns="http://www.w3.org/1999/xhtml" style="display:inline-block;text-align:inherit;text-decoration:inherit;white-space:normal;">Text</div></div></foreignObject></g></g></g><g></g><g></g></g></svg>
                            </li>
                            <li className="blocks-item">
                                <svg style="left: 1px; top: 1px; width: 64px; height: 60px; display: block; position: relative; overflow: hidden;"><g><g></g><g><g style="visibility: visible;" transform="translate(0.5,0.5)"><path d="M 2.25 4.95 C 2.25 0.15 29.25 0.15 29.25 4.95 L 29.25 24.75 C 29.25 29.55 2.25 29.55 2.25 24.75 Z" fill="#ffffff" stroke="#000000" stroke-width="1.3" stroke-miterlimit="10" pointer-events="all"></path><path d="M 2.25 4.95 C 2.25 8.55 29.25 8.55 29.25 4.95 M 2.25 6.75 C 2.25 10.35 29.25 10.35 29.25 6.75 M 2.25 8.55 C 2.25 12.15 29.25 12.15 29.25 8.55" fill="none" stroke="#000000" stroke-width="1.3" stroke-miterlimit="10" pointer-events="all"></path></g></g><g></g><g></g></g></svg>
                                <div className="tooltip block-tooltip">
                                    <p className="tooltip-text">
                                        Data Storage
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="app-field">
                    <div className="department-area">
                        <p className="department-area-title">Отдел 1</p>
                    </div>
                    <div className="department-area" style="height: 150px;">
                        <p className="department-area-title" style="height: 130px;">Отдел 2</p>
                    </div>
                    <div className="department-area" style="height: 150px;">
                        <p className="department-area-title" style="height: 130px;">Отдел 3</p>
                    </div>
                    <div className="department-area" style="height: 200px;">
                        <p className="department-area-title" style="height: 180px;">Отдел 4</p>
                    </div>
                </div>
                <div className="right-sidebar">
                    <span className="sidebar-title">Информация</span>
                    <span className="sidebar-title">Участники процесса</span>
                </div>
            </div>
    </>
;