import c from "./ProfileInfo.module.css";
import React from "react";

export const ProfileInfo = () => {
    return (
        <div>
            <div className={c.content}>
                <div className={c.profile}>
                    <span>Виктор Адамович</span><img
                    src="http://sun9-81.userapi.com/s/v1/ig2/yfW2G2UjBNtgoykFhPdastdMpOjsVweYGmeYYWO3jWaQfy0hd1CGdEl-ke7JZ9LXhwClrQ7R6_juWk_VgITWQKpd.jpg?size=604x604&quality=96&type=album"
                    alt=""/>
                </div>
            </div>
        </div>
    )
}