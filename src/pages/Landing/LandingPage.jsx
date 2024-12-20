
import berita from '../../assets/berita.svg'
import about from '../../assets/about.svg'
import data from '../../components/LandingPageComponent/utils/data.js'
import Whatsapp from '../../assets/whatsapp.svg'
import email from '../../assets/email.svg'

function LandingPage() {
    return (
        <section>
            <div className="content" id='content'>
                <div className='card'>
                    <div>
                        <h1>Bergabunglah Bersama Kami</h1>
                        <p>Transformasikan bisnis kost Anda menjadi lebih baik.</p>
                    </div>
                    <p>Nikmati kemudahan pengelolaan kost dengan layanan yang profesional dan terpercaya. Dengan teknologi modern dan <span style={{ color: '#D1A000FF' }}><strong>kecepatan dalam membuatnya, hanya dengan menghubungi via Whatsapp dibawah</strong></span>, kami membantu Anda meningkatkan efisiensi sekaligus memaksimalkan keuntungan. Jadikan bisnis kost Anda lebih praktis, nyaman, dan menguntungkan bersama kami!</p>
                    <div style={{display : 'flex', flexDirection : 'row', flexWrap : 'wrap', gap : '1rem'}}>
                        <div>
                            <a href="https://wa.me/+62085156591502"><img src={Whatsapp} alt="whatsapp" style={{ width: 60 }} /></a>
                        </div>
                        <div>
                            <a href="mailto:info@paykos.com"><img src={email} alt="whatsapp" style={{ width: 60 }} /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='fasilitas' id='fasilitas'>
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
            <div className='about' id='about'>
                <div style={{ flex: '1', flexBasis: '300px' }}>
                    <div className='gambar2'>
                        <img src={about} alt="foto" style={{ maxWidth: '120px', height: '100%' }} />
                    </div>
                    <h2>Tentang Kami</h2>
                    <p>Kami adalah sebuah perusahaan yang berkomitmen untuk memberikan layanan terbaik dengan kualitas tinggi. Dengan pengalaman yang luas, kami menawarkan solusi inovatif untuk setiap tantangan yang dihadapi. Misi kami adalah untuk terus berkembang, memberikan nilai lebih bagi klien, dan menjadi mitra terpercaya dalam setiap proyek yang kami jalani.</p>
                </div>
                <div style={{ flex: '1', flexBasis: '300px' }}>
                    <div className='gambar2'>
                        <img src={berita} alt="foto" style={{ maxWidth: '120px', height: '100%' }} />
                    </div>
                    <h2>Berita Terkini</h2>
                    <p>Simak informasi terbaru seputar perkembangan kami dan dunia industri terkait. Kami selalu berusaha memberikan update terkini mengenai inovasi dan perubahan yang terjadi di lingkungan bisnis. Ikuti berita terbaru dari kami untuk mendapatkan wawasan dan informasi yang relevan untuk Anda.</p>
                </div>
            </div>
        </section>
    )
}

export default LandingPage