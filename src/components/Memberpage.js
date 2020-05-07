import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import profile1 from '../assets/Profile_Kan.jpg';
import profile2 from '../assets/Profile_Korn.jpg';
import profile3 from '../assets/Profile_Ninja.jpg';
import profile4 from '../assets/Profile_Thun.jpg';


import '../style/Memberpage.css';
class Member extends React.Component {
    render() {
        return (
            <div className="container members">

                <div className="row">
                    <div className="col">
                        <div className="card">
                            <img src={profile1} className="card-img-top picture" />
                            <div className="card-body">
                                <h5 className="card-title">นายธนกานต์ บุญมา</h5>
                                <footer class="blockquote-footer">role <cite title="Source Title">web developer</cite></footer><hr />
                                <p className="card-text">รหัสนักศึกษา: 62070077<br />คณะเทคโนโลยีสารสนเทศ<br />สาขาเทคโนโลยีสารสนเทศ</p>
                            </div>
                            <div className="card-body">
                                <a href="https://github.com/l3luescreen" className="card-link">Github</a>
                                <a href="https://www.facebook.com/profile.php?id=100005169585226" className="card-link">Facebook</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={profile2} className="card-img-top picture" />
                            <div className="card-body">
                                <h5 className="card-title">นายณฐกร อเนกบุญลาภ</h5>
                                <footer class="blockquote-footer">role <cite title="Source Title">poster, material, accountant</cite></footer><hr />
                                <p className="card-text">รหัสนักศึกษา: 62070057<br />คณะเทคโนโลยีสารสนเทศ<br />สาขาเทคโนโลยีสารสนเทศ</p>
                            </div>
                            <div className="card-body">
                                <a href="https://github.com/NNathakorn" className="card-link">Github</a>
                                <a href="https://m.facebook.com/nathakorn.ai.3" className="card-link">Facebook</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={profile3} className="card-img-top picture" />
                            <div className="card-body">
                                <h5 className="card-title">นายกันตภณ นิธิเสริมวงศ์</h5>
                                <footer class="blockquote-footer">role <cite title="Source Title">model 3D,</cite></footer><hr />
                                <p className="card-text">รหัสนักศึกษา: 62070009<br />คณะเทคโนโลยีสารสนเทศ<br />สาขาเทคโนโลยีสารสนเทศ</p>
                            </div>
                            <div className="card-body">
                                <a href="https://github.com/fapraider" className="card-link">Github</a>
                                <a href="https://www.facebook.com/profile.php?id=100008046457154" className="card-link">Facebook</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={profile4} className="card-img-top picture" />
                            <div className="card-body">
                                <h5 className="card-title">นายฐานานุศักดิ์ เพ่งเล็งดี</h5><hr />
                                <p className="card-text">รหัสนักศึกษา: 62070053<br />คณะเทคโนโลยีสารสนเทศ<br />สาขาเทคโนโลยีสารสนเทศ</p>
                            </div>
                            <div className="card-body">
                                <a href="https://github.com/witchesport" className="card-link">Github</a>
                                <a href="https://m.facebook.com/witchesport?ref=bookmarks" className="card-link">Facebook</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Member;