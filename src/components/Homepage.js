import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactPlayer from 'react-player'
import video from '../assets/compro.mp4';
import poster from '../assets/poster.png';
import github from '../assets/Github_Logo.png';
import '../style/Homepage.css';

class Page extends React.Component {
    render() {
        const opts = {
            width: '100%',
            height: '500',
            playerVars: {
                autoplay: 1,
                controls: 0,
                disablekb: 1
            },
        };
        return (
            <div>
                <div className="videoBox">
                    <ReactPlayer url={video} playing width="500" height="500" loop="true" />
                </div >
                <div className="data">
                    <h1 className="header">Project: Hermes</h1>
                    <div class="card card-body info">
                        <b><h3>ที่มาของโปรเจค</h3></b><p>
                            <h5>เนื่องด้วยในโลกยุคปัจจุบันที่เทคโนโลยีมีความก้าวหน้าและพัฒนามากขึ้น มนุษย์เราต้องการเทคโนโลยีที่มีความทันสมัยมาช่วยให้การดำเนินชีวิตให้ง่ายและสะดวกสบายมากยิ่งขึ้น
                            โดยทางเราได้คิดค้นอุปกรณ์เคลื่อนย้ายสิ่งของ/วัตถุที่สามารถติดตามผู้ใช้ไปยังที่ต่างๆโดยอัตโนมัติผ่านระบบการส่งสัญญาณ ซึ่งทางเราคิดว่ายังคงไม่ดีเท่าที่ควร ต่อมาในภายหลังเราจึงเพิ่มระบบเซนเซอร์ตรวจเช็คบริเวณโดยรอบเพิ่มเข้าไปเพื่อป้องกันการชนสิ่งกีดขวางเอาไว้เพื่อป้องกันไม่ให้ตัวอุปกรณ์เกิดความเสียหายจากการกระแทก
โดยอุปกรณ์ชนิดนี้ถูกสร้างขึ้นเพื่อเอาไปประยุกต์ใช้สำหรับการทำกระเป๋าสำหรับการเดินทางตามสถาณที่ต่างๆ หรือ สิ่งของที่จำเป็นต้องมีการขนย้ายหรือเคลื่อนที่ตลอดเวลาซึ่งจะช่วยสามารถประหยัดแรงและเวลาไปได้เป็นอย่างมาก</h5></p>

                    </div>
                    <div className="row">
                        <div className="col-6">
                            <img src={poster} className="poster" />
                            <div class="card github">
                                <div class="card-body">
                                    <h3>Github ของเว็ปไซต์นี้</h3><br/>
                                    <a href="https://github.com/l3luescreen/Website-Compro" target="_blank"><h4>Source code</h4></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 material">
                            <div className="card">
                                <div className="card-header">
                                    อุปกรณ์ที่ใช้
                            </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Arduino UNO & Genuino UNO</li>
                                    <li className="list-group-item">เเผ่นไม้ไม้</li>
                                    <li className="list-group-item">ท่อ pvc</li>
                                    <li className="list-group-item">Wheel, 6-Inch</li>
                                    <li className="list-group-item">Swivel Caster</li>
                                    <li className="list-group-item">Geared 12V DC Motor</li>
                                    <li className="list-group-item">Shaft Hub, 4 mm</li>
                                    <li className="list-group-item">Turnigy 2200mAh 3S 20C Lipo Pack</li>
                                    <li className="list-group-item">Portible USB Charger</li>
                                    <li className="list-group-item">M3 Nuts and Bolts</li>
                                    <li className="list-group-item">M5 Nuts, Bolts, and Washers</li>
                                    <li className="list-group-item">#4 x 1" Nuts and Bolts</li>
                                    <li className="list-group-item">#6 x 1" Wood Screws</li>
                                    <li className="list-group-item">#10 Nuts, Bolts, and Washers</li>
                                    <li className="list-group-item">1/2" Washer</li>
                                    <li className="list-group-item">Nails, 1"</li>
                                    <li className="list-group-item">Jumper wires (generic)</li>
                                    <li className="list-group-item">USB-A to Micro-USB Cable</li>
                                    <li className="list-group-item">Picture Hanging Command Strips</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Page;