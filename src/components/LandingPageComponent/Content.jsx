import berita from '../../assets/berita.svg'
import about from '../../assets/about.svg'
import data from './utils/data'
import Whatsapp from '../../assets/whatsapp.svg'
import email from '../../assets/email.svg'

function Content() {
    return (
        <>
            <br />
            <br />
            <div className="content" id='content'>
                <div className='home'>
                    <h1>Bergabunglah Bersama Kami</h1>
                    <p>Transformasikan bisnis kost Anda menjadi lebih baik.</p>
                    <p>Nikmati kemudahan pengelolaan kost dengan layanan yang profesional dan terpercaya. Dengan teknologi modern dan <span style={{ color:'yellow' }}><strong>kecepatan dalam membuatnya, hanya dengan menghubungi via Whatsapp dibawah</strong></span>, kami membantu Anda meningkatkan efisiensi sekaligus memaksimalkan keuntungan. Jadikan bisnis kost Anda lebih praktis, nyaman, dan menguntungkan bersama kami!</p>
                    <div className='flex'>
                        <div>
                            <a href="https://wa.me/+62085156591502"><img src={Whatsapp} alt="whatsapp" style={{ width:60 }} /></a>
                        </div>
                        <div>
                            <a href="mailto:info@paykos.com"><img src={email} alt="whatsapp" style={{ width:60 }} /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='fasilitas' id='fasilitas'>
                <div className='home'>
                    <h1>Keunggulan</h1>
                    <div className='fasilitas_images'>
                        {data.map((item, index) => (
                            <div key={index}>
                                <div className='gambar'>
                                    <div className='sizegambar'>
                                        <img src={item.gambar} alt="foto" />
                                    </div>
                                    <li><strong>{item.judul}:</strong> {item.deskripsi}</li>
                                </div>
                            </div>
                        )
                        )}

                    </div>
                </div>
            </div>
            <div className='about' id='about'>
                <div>
                    <div className='gambar2'>
                        <img src={about} alt="foto" style={{ width:280 }}/>
                    </div>
                    <h2>Tentang Kami</h2>
                    <p>Kami adalah sebuah perusahaan yang berkomitmen untuk memberikan layanan terbaik dengan kualitas tinggi. Dengan pengalaman yang luas, kami menawarkan solusi inovatif untuk setiap tantangan yang dihadapi. Misi kami adalah untuk terus berkembang, memberikan nilai lebih bagi klien, dan menjadi mitra terpercaya dalam setiap proyek yang kami jalani.</p>
                </div>
                <div>
                    <div className='gambar2'>
                        <img src={berita} alt="foto" style={{ width:280 }}/>
                    </div>
                    <h2>Berita Terkini</h2>
                    <p>Simak informasi terbaru seputar perkembangan kami dan dunia industri terkait. Kami selalu berusaha memberikan update terkini mengenai inovasi dan perubahan yang terjadi di lingkungan bisnis. Ikuti berita terbaru dari kami untuk mendapatkan wawasan dan informasi yang relevan untuk Anda.</p>
                </div>
            </div>
        </>
    )
}

export default Content