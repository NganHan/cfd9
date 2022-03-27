import React, { useEffect, useState } from 'react'
import { generatePath, Link, useNavigate, useParams } from 'react-router-dom'
import { courseService } from '../../services/course'
import { currency } from "../../utils/number.js";
import { COURSE_REGISTER_PATH, HOME_PATH } from '../../constants/path';
import CourseAccodion from '../../components/courseAccodion';
import Teacher from './components/Teacher';
import useQuery from '../../hooks/useQuery';
import Skeleton from '@mui/material/Skeleton';

export default function CourseDetail() {
    const {id} = useParams()
    const navigate = useNavigate()
    const callApi = async() => {
        const res = await courseService.getDetail(id)
        // console.log(res);
        if(res.data){
            return res 
        }else{
            navigate({HOME_PATH})
        }

    }
    const {data: detail, loading} = useQuery(callApi)
    const {teacher} = detail
    const registerPath = generatePath(COURSE_REGISTER_PATH, {id})
    return (
        <>
            <main className="course-detail" id="main">
                <section className="banner style2" style={{ '--background': detail.template_color_banner }}>
                    <div className="container">
                        <div className="info">
                            {
                                !loading ? <h1>Thực Chiến {detail.title}</h1> : <Skeleton variant="text" width={'100%'} height={128}/>
                            }
                            {
                                !loading ? (
                                    <div className="row">
                                        <div className="date"><strong>Khai giảng:</strong> 12/10/2020</div>
                                        <div className="time"><strong>Thời lượng:</strong> 18 buổi</div>
                                    </div>
                                ):<Skeleton variant="text" width={'70%'}/>
                            }
                            
                            <Link to={registerPath} className="btn white round" style={{ '--color-btn': detail.template_color_btn }}>đăng ký</Link>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="container">
                            <div className="video">
                                <div className="icon">
                                    <img src="img/play-icon-white.png" alt="" />
                                </div> <span>giới thiệu</span>
                            </div>
                            <div className="money">{currency(detail.money)} VND</div>
                        </div>
                    </div>
                </section>
                <section className="section-2">
                    <div className="container">
                        {
                            !loading ? <p className="des">{detail.long_description}</p> : <Skeleton variant="text" width={'100%'} height={300}/>
                        }
                        
                        <h2 className="title">giới thiệu về khóa học</h2>
                        <div className="cover">
                            <img src="img/course-detail-img.png" alt="" />
                        </div>
                        <h3 className="title">nội dung khóa học</h3>
                        <CourseAccodion.Group>
                            {
                                !loading ? detail.content?.map((e, i) => <CourseAccodion key={i} index = {i+1} {...e}/>):
                                [...Array(18)].map((_,i) => <div key={i} style={{marginBottom:8}}><Skeleton height={100}/></div>)
                                
                            }

                        </CourseAccodion.Group>
                        <h3 className="title">yêu cầu cần có</h3>
                        <div className="row row-check">
                            <div className="col-md-6">Đã từng học qua HTML, CSS</div>
                            <div className="col-md-6">Cài đặt phần mềm Photoshop,
                                Adobe illustrator, Skype</div>
                        </div>
                        <h3 className="title">hình thức học</h3>
                        <div className="row row-check">
                            <div className="col-md-6">Học offline tại văn phòng, cùng {detail.teacher?.title} và 3 đồng nghiệp.</div>
                            <div className="col-md-6">Dạy và thực hành thêm bài tập online
                                thông qua Skype.</div>
                            <div className="col-md-6">Được các mentor và các bạn trong team CFD hổ trợ thông qua group CFD Facebook
                                hoặc phần mềm điều khiển máy tính.</div>
                            <div className="col-md-6">Thực hành 2 dự án thực tế với sự hướng dẫn của CFD Team.</div>
                        </div>
                        <h3 className="title">
                            <div className="date-start">lịch học</div>
                            <div className="sub">*Lịch học và thời gian có thể thống nhất lại theo số đông học viên.</div>
                        </h3>
                        <p>
                            <strong>Ngày bắt đầu: </strong> 09/09/2020 <br />
                            <strong>Thời gian học: </strong> Thứ 3 từ 18h45-21h45, Thứ 7 từ 12h-15h, Chủ nhật từ 15h-18h
                        </p>
                        <h3 className="title">Người dạy</h3>
                        <Teacher teacher={teacher}/>
                        <h3 className="title">Mentor</h3>
                        {
                            detail.mentor?.map(e => <Teacher key={e.id} teacher={e}/>)
                        }
                        <div className="bottom">
                            <div className="user">
                                <img src="img/user-group-icon.png" alt="" /> 12 bạn đã đăng ký
                            </div>
                            <Link to={registerPath} className="btn main btn-register round">đăng ký</Link>
                            <div className="btn-share btn overlay round btn-icon">
                                <img src="img/facebook.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}