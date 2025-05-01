import React, {useRef } from 'react';
import './Bannerus.css';
import { Box,Typography } from '@mui/material';
export default function Bannerus() {
  const refbox=useRef();
  const refbutton=useRef();
  const addstyle=()=>{
    refbox.current.className="cc";
    refbutton.current.className="refbutton";
  }
  return (
    <>
    <div className='banner h-[70%] md:h-[80vh] mt-0 ' >
    <svg className='blurstyle' width='100%' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#f2d7a2" fill-opacity="0.8" d="M0,0L720,256L1440,96L1440,0L720,0L0,0Z"></path>
        <text className='textblurb' font-size="32"   x="1050" y="100" fill='#282828' > تفاوت خرید را در دستگاه های سهیل تجربه کنید</text>
        <text font-size="24" font-family="tahoma" text-decoration="underline" className='text' x="1002" y="140" fill='#282828' >________________________________________</text>
      </svg>  
    </div>
<div  ref={refbox} className='flex justify-start flex-col self-center h-[200px] overflow-hidden mt-5 pt-1 px-5'>
  <p className='text-gray-700 py-3 text-start font-bold text-2xl'>داستان ما از کجا شروع شد؟</p>
  <p  className='text-justify text-md text-gray-500 font-sans'>سهیل از ابتدا تا انتها، متعهد به شما

«ارکان ساختار نوین ایرانیان» عبارت طولانی اما مهمیه! و ما به طور مخفف صداش می‌زنیم سهیل. سهیل سیاره‌ایه که زمان توش حرف اول رو می‌زنه. هرکدوم از لوازم خونگی سهیل یه وظیفه‌ی مهم داره، اونم اینه که یه کاری کنه شما 
بتونین از زمان مفیدتون به بهترین شکل ممکن استفاده کنین. کارهای تکراری و خسته کننده رو لوازم خونگی‌ سهیل براتون انجام می‌ده تا شما بتونین به کارهای مهمتون برسین!
کل ماجرای سهیل از سال ۸۴ شروع شد، یه گروه از بهترین تولید‌کننده‌ها، مهندس‌ها و کارشناس‌ها ایرانی دست به دست هم دادن تا تولید ملی رنگ و روی تازه‌تری به خودش بگیره!
از اون موقع تا امروز، تعهد، کیفیت، هوشمندی و حمایت برای ما خلاصه شده در سهیل! برای همینه که می‌گیم، می‌تونید روی ما حساب کنید!</p>
<p className='text-gray-700 py-3 text-start font-bold text-xl'  >
چشم انداز سهیل
         </p>
         <p   className='text-justify text-md text-gray-500 font-sans'>
         برند سهیل قصد دارد با ارائه سبد محصولات متناسب با فرهنگ ایرانی، تجربه مصرف‌کنندگان از محصولات را بهبود بخشد و به عنوان یک برند ملی آینده محور شناخته شود.
         </p>
         <p className='text-gray-700 py-3 text-start font-bold text-xl' >
         ماموریت سهیل
         </p>
          <p  className='text-justify text-md text-gray-500 font-sans'>
          سهیل یک برند ملی در زمینه تولید لوازم خانگی می‌باشد که خلق 
          ارزش برای مصرف کننده را در آفرینش سبک زندگی منحصر به فرد از راه القای ریشه‌های فرهنگ ایرانی در ویژگی‌های محصولات و خدمات می‌داند. برند سهیل اعتقاد دارد بالاترین ارزش از طریق ارائه سبد محصول مدرن، بادوام و اصیل همراه با آمیخته تکنولوژی روز جهان ایجاد می‌شود.
         </p>
         <p className='text-gray-700 py-3 text-start font-bold text-xl'  >
فرهنگ ایرانی
         </p>
         <p   className='text-justify text-md text-gray-500 font-sans'>
         سهیل 
         هم‌راستا با ‌فرهنگ ‌ایرانی است. جامعه ایرانی مشتریان اصلی سهیل هستند که پیشینه اصیل و پرافتخاری همراه خود دارند.
          سهیل به فرهنگ ایرانی و حفظ آن اهمیت می‌دهد و براساس نیازهای این فرهنگ محصولات و خدمات خود را طراحی و تولید می‌کند.
          </p>
         <p className='text-gray-700 py-3 text-start font-bold text-xl' >
         مسئولیت پذیری
         </p>
         <p   className='text-justify text-md text-gray-500 font-sans'>
         سهیل خود را در برابر اهداف، ارزش‌ها و وعده‌هایی که تعریف کرده است مسئول می‌داند و این اهداف را با ذی‌نفعان خود به اشتراک می‌گذارد تا همواره در مسیر اهداف خود ثابت‌قدم و مسئولیت‌پذیر باشد.
          </p>
         <p className='text-gray-700 py-3 text-start font-bold text-xl'  >
         کارآمدی
         </p>
         <p   className='text-justify text-md text-gray-500 font-sans'>
         سهیل به وقت کاربران خود اهمیت می‌دهد و برای ساده کردن امور زندگی مشتریانش و مراقبت از آن‌ها تلاش می‌کند. 
         سهیل در تولید و طراحی محصولات و خدماتش سادگی استفاده و کاربردی بودن را الگو قرار می‌دهد.
          </p>
         <p className='text-gray-700 py-3 text-start font-bold text-xl' >
         مشتری مداری
         </p>
         <p   className='text-justify text-md text-gray-500 font-sans'>
         سهیل تلاش خواهد کرد نیاز مشتریان خود را اولویت قرار دهد و براساس آن عمل کند. 
         سهیل به دنبال کسب رضایت مشتریان خود و ایجاد رابطه طولانی مدت با آن‌هاست.
          ارائه محصولات براساس نیاز مشتریان می‌تواند از آن‌ها مراقبت کند و زندگی روزمره را برای کاربران خود ساده و راحت کند.
          </p>
          <p  className='text-gray-700 py-3 text-start font-bold text-xl' >
          قابل اعتماد بودن
          </p>
          <p   className='text-justify text-md text-gray-500 font-sans'>
          سرمایه مهم سهیل اعتماد افرادی است که محصولات و خدماتش را انتخاب کرده‌اند. سهیل
           دائما تلاش می‌کند محصولات و خدمات خود را بهبود بخشد و پاسخی شایسته به اعتماد مشتریانش دهد.
          </p>
          <p  className='text-gray-700 py-3 text-start font-bold text-xl' >
         تلاشگری
          </p>
          <p   className='text-justify text-md text-gray-500 font-sans'>
          تاریخچه سهیل نمایان‌گر تلاش‌ها و مسیر طی شده
           برای بهتر شدن و پیشرفت است. تلاش و کار سخت از مهم‌ترین دلایل بقا
            و پایداری برند سهیل است. اسنوا می‌داند مسیر پیشرفت و تعالی بی انتهاست و از تلاش دست نخواهد کشید.
          </p>
</div>
<div className='flex justify-center self-center mt-5'
 ref={refbutton} onClick={addstyle}   >
<button >  <span className='formbutton'>   مطالب بیشتر </span></button>
        </div>
    </>
  );
}
