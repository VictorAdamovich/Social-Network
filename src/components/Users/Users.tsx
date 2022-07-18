import React, {useEffect} from 'react';
import s from './users.module.css';
import userPhoto from '../../assets/images/user.jpg';
import {useDispatch} from 'react-redux';
import {AppDispatch, useAppSelector} from '../../redux/store';
import {getUsers, setFollow, setUnfollow} from 'redux/users-reducer';
import {Card, CircularProgress, Pagination} from '@mui/material';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const Users = () => {

    const dispatch: AppDispatch = useDispatch();
    const totalUsersCount = useAppSelector((state) => state.usersPage.totalUsersCount);
    const pageSize = useAppSelector((state) => state.usersPage.pageSize);
    const currentPage = useAppSelector((state) => state.usersPage.currentPage);
    const users = useAppSelector((state) => state.usersPage.users);
    const followingInProgress = useAppSelector((state) => state.usersPage.followingInProgress);


    const onPageChanged = (pageNumber: number) => {
        dispatch(getUsers(pageNumber, pageSize));
    };
    const followUser = (userID: number) => dispatch(setFollow(userID));
    const unfollowUser = (userID: number) => dispatch(setUnfollow(userID));


    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
        debugger
    }

    useEffect(() => {
        dispatch(getUsers(currentPage, pageSize));
    }, []);

    if (users.length < 1) {
        return <div
            style={{position: 'fixed', top: '30%', textAlign: 'center', width: '100%'}}>
            <CircularProgress/>
        </div>;
    }

    return (
        <div>
            <div className={s.paginationContainer}>
                <Pagination
                    className={s.pagination}
                    count={pagesCount}
                    page={currentPage}
                    onChange={(_, p) => onPageChanged(p)}
                    shape="rounded"/>

            </div>


            {users.map((u) =>
                <Card variant="outlined" sx={{display: 'flex', margin: '5px'}}>
                    <CardMedia
                        component="img"
                        sx={{width: 151}}
                        image={u.photos.large
                            ? u.photos.large
                            : userPhoto}
                        alt="Live from space album cover"
                    />
                    <Box sx={{display: 'flex', flexDirection: 'column'}}>
                        <CardContent sx={{flex: '1 0 auto'}}>
                            <Typography component="div" variant="h5">
                                Name: {u.name}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary"
                                        component="div">
                                Status: {u.status}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary"
                                        component="div">
                                ID: {u.id}
                            </Typography>
                        </CardContent>
                        <Box sx={{display: 'flex', alignItems: 'center', pl: 1, pb: 1}}>
                            {!u.followed
                                ? <Button
                                    size="small"
                                    variant="contained"
                                    onClick={() => followUser(u.id)}
                                    disabled={followingInProgress.some(id => id === u.id)}
                                >Follow</Button>
                                : <Button
                                    size="small"
                                    variant="outlined"
                                    onClick={() => unfollowUser(u.id)}
                                    disabled={followingInProgress.some(id => id === u.id)}
                                >Unfollow</Button>
                            }
                        </Box>
                    </Box>

                </Card>
            )
            }
        </div>

    );
};

export default Users;