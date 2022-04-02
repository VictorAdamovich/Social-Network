import React from 'react';
import classes from './Profile.module.css';

const Profile = () => {
    return (
        <div className={classes.content}>
            <div className="{classes.div}"><img
                src="https://media.cntraveler.com/photos/5eb18e42fc043ed5d9779733/16:9/w_2580,c_limit/BlackForest-Germany-GettyImages-147180370.jpg"
                alt=""/>
            </div>
            <div>ava+disc</div>
            <div>mypost</div>
            <div>New post</div>
            <div>Post1</div>
            <div>Post2</div>
        </div>
    );
};

export default Profile;