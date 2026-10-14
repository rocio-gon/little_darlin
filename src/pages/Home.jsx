import '../App.css'
import GiftCard from '../components/GiftCard'

function Home() {
    return (
    <>
      <main>
        <h2>Howdy, little darlin’!</h2>
        <p>
          We’re counting our blessings, fluffing the bows, and getting ready for our sweetest adventure yet.
        </p>

        <section>
          <h2>Her Little Wishlist</h2>
          <p>We’re so grateful to have you be part of this sweet season with us.</p>

        <h3>Clothing</h3>
        <div className="gift-list">
          <GiftCard name="Tiny Cowboy Boots" price={28} image="https://target.scene7.com/is/image/Target/GUEST_94fce55b-0d12-44b7-a209-fde4776e221f?wid=1000&hei=1000&qlt=80&fmt=webp" productUrl="https://www.target.com/p/laura-ashley-infants-boots-for-girls-cozy-warm-soft-sole-winter-style-infant-baby/-/A-1007111930?preselect=1007111928#lnk=sametab" store="Target" />
          <GiftCard name="Little Bow Set" price={8} image="https://target.scene7.com/is/image/Target/GUEST_40a5e919-71de-4710-a6d6-b4ddeb65f199?wid=1000&hei=1000&qlt=80&fmt=webp" productUrl="https://www.target.com/p/carter-39-s-just-one-you-174-baby-girls-39-4pk-headwrap-pink-green-newborn/-/A-94832405" store="Target" />
        </div>

        <h3>Feeding</h3>
        <div className="gift-list">
          <GiftCard name="Ruffle Infant Bib" price="9" image="https://i5.walmartimages.com/asr/47edf470-30b6-4732-a13f-b3e379e4848a.467d01e41b328c6d4ec9eac1c1159afc.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF" productUrl="https://www.walmart.com/ip/Neat-Solutions-Ruffle-Sleeve-3-Pack-Infant-Bib/5022271413" store="Walmart" />
          <GiftCard name="Organic Burp Clothes" price={19} image="https://m.media-amazon.com/images/I/81WoawI4GWL._SL1500_.jpg" productUrl="https://www.amazon.com/Organic-Cloths-Large-Burping-Butterflies/dp/B0CDQ1GKJ7/ref=sr_1_2_sspa?crid=1V0NCJLBMMCVS&dib=eyJ2IjoiMSJ9.RhQyfPODd-RluqsMYYPgcdTqnQH12Pd7_o3FY8b_QgJ62oSDBVcSwASCAZVn1Y2DKINHb032G2Tm1L4seOSTCVSWryLEDc_InI8mqflr-9hDctADmSYFISSSYu2MTMs9MUtuuS6DQ-Ccn4zGfGOWDLvqH5JEC06pdo69THW8FAe2rg034b8EIrQ0OTiB4m-bCUODxUTD9mhmV3fj7GGs5RHAQE9pZKDe-g0q0UYKL_RvS-cLfGumbW7Yze5p5oHasunK907s7pMcxUQlePXgcgBxSuf0ja2CUdQcyBzF4SI.7AqEtUUaJMyf_94QapPHxJIkv3icEHsOVdZOq6pCg-o&dib_tag=se&keywords=burping%2Bcloths&qid=1791908039&sprefix=burping%2Bcloth%2Caps%2C317&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1" store="Amazon" />
          <GiftCard name="Baby Bottles" price={25} image="https://target.scene7.com/is/image/Target/GUEST_e3fd76ef-e365-4dd2-9ba3-1e9d33b5b7c3?wid=1200&hei=1200&qlt=80" productUrl="https://www.target.com/p/evenflo-6pk-balance-wide-neck-anti-colic-baby-bottles-5oz/-/A-51793478" store="Target" />
          <GiftCard name="Bottle Warmer" price={50} image="https://m.media-amazon.com/images/I/61RgnJoS9PL._SL1500_.jpg" productUrl="https://www.amazon.com/gp/aw/d/B0DSKXD9NS?pd_rd_plhdr=t&hsa_cr_id=0&qid=1791940353&sr=1-3-5a5562f9-fdfd-4101-9f9d-d76aa9998432&i=aps&aref=GsDOKETfB9&_encoding=UTF8&ref_=sbx__sbtcd2_asin_2_title&pf_rd_p=90f77631-9599-4fe0-95f8-a40adfe1c762&pf_rd_r=KBGK5SRZP5T3Z6YPJ2MS&pd_rd_wg=m1gdN&pd_rd_w=ZBXmI&content-id=amzn1.sym.90f77631-9599-4fe0-95f8-a40adfe1c762%3Aamzn1.sym.90f77631-9599-4fe0-95f8-a40adfe1c762&pd_rd_r=5560b187-5a82-4996-9611-65312b46e064&th=1"  store="Amazon" />
        </div>

        <h3>Nursery</h3>
        <div className="gift-list">
          <GiftCard name="Crib Fitted Sheet" price={35} image="https://cb.scene7.com/is/image/Crate/OrgJerseyFtdShtNatAVPRSHSSF22?$web_pdp_main_carousel_med$" productUrl="https://www.crateandbarrel.com/comfy-tee-whisper-solid-natural-100-organic-cotton-jersey-baby-crib-fitted-sheet/s572738" store="Crate&BarrelKids" />
          <GiftCard name="Nursery Storage Basket" price={33} image="https://target.scene7.com/is/image/Target/GUEST_8e28ef15-ada5-4f7b-8a2c-c8640d1e8a4a?wid=1200&hei=1200&qlt=80" productUrl="https://www.target.com/p/large-round-coiled-rope-basket-cloud-island-8482/-/A-76675464" store="Target"/>
        </div>

        <h3>Play Time</h3>
        <div className="gift-list">
          <GiftCard name="Play Gym Mat" price={70} image="https://m.media-amazon.com/images/I/71NPQfQQnZL._SL1500_.jpg" productUrl="https://www.amazon.com/Blissful-Diary-Detachable-Development-Essentials/dp/B0FWKK1QGT/ref=sxin_11_pa_sp_search_thematic_sspa?content-id=amzn1.sym.c7766b4a-1235-4790-a042-9f00d77510b1%3Aamzn1.sym.c7766b4a-1235-4790-a042-9f00d77510b1&crid=1KRQY433FI9NH&cv_ct_cx=baby%2Bplay%2Bgym&keywords=baby%2Bplay%2Bgym&pd_rd_i=B0DHVHLP32&pd_rd_r=f445f433-cb9e-477a-b3e4-9198cc50c547&pd_rd_w=k4EOR&pd_rd_wg=PxZjA&pf_rd_p=c7766b4a-1235-4790-a042-9f00d77510b1&pf_rd_r=P2GZDSN8CWWGWG1DBH53&qid=1791941057&s=baby-products&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=baby%2Bplay%2Bgym%2Cbaby-products%2C175&sr=1-4-49e4cbfc-c495-45fe-a611-e805ca89bb91-spons&aref=DOv7LGu2PN&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&th=1" store="Amazon" />
          <GiftCard name="Play Gym Mat" price={16} image="https://target.scene7.com/is/image/Target/GUEST_f7edcc0d-84de-419a-b27c-de6747c5b0ca?wid=1200&hei=1200&qlt=80" productUrl="https://www.target.com/p/infantino-go-gaga-spiral-activity-toy-pink/-/A-82224585" store="Target"/>
        </div>

         <h3>Mama's Essentials</h3>
        <div className="gift-list">
          <GiftCard name="Manual Breast Pump" price={13} image="https://m.media-amazon.com/images/I/71Qwxm7NamL._AC_SL1500_.jpg" productUrl="https://www.amazon.com/Haakaa-Breast-Manual-Silicone-Breastfeeding/dp/B07CWK4S5W/ref=sr_1_11?crid=JN8649B7D3F4&dib=eyJ2IjoiMSJ9.UsTFkyaY7CBSTu5KonXhkOY0Lh7KaCaFTRXNpoX07a9evQjXY0tY016wdtfriOAHLiOVv7j47NM0bHV8mJGyKIvZoRKWOsF7BzOeJqr4WXZfOWK4I10SDoaRaboDnf4kp4mBfBRwtswyHqgK-bi3P4FV2JXycF0xts30FU2N0hbZ7SVHHI2NZX5plhQIC38RuRt5HlDFzQlEtunmxbdjQeaC8VRcwPq5c1TBlDsFf-ETF-l9k9wuZTZD_w6JtV_ndC0Ktas6DE5ZGBTF9DWcevu-7BcGbWSB6T8Wxw7lxoc.MSheU0xcGDyzu51mwqnADk4u4SqC26jrCec2Sl55dSI&dib_tag=se&keywords=manual%2Bbreast%2Bpump&qid=1791982089&s=baby-products&sprefix=manual%2Bbreast%2Cbaby-products%2C160&sr=1-11&th=1" store="Amazon" />
          <GiftCard name="Nipple Butter" price={13} image="https://m.media-amazon.com/images/I/61HK1nHCwKL._SL1500_.jpg" productUrl="https://www.amazon.com/Breastfeeding-Earth-Mama-Lanolin-free-Verified/dp/B000JVCBBG/ref=sr_1_3_sspa?dib=eyJ2IjoiMSJ9.sfh-QCUKwHwh8YnM3Kkr6A.AHx0jCNrhYHx7hAtXxFsh_VqBxbC9LnbCfiDesRfmNY&dib_tag=se&keywords=perennial%2Bfoam%2Bbear%2Bmum&qid=1791983057&sr=8-3-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9idGY&th=1" store="Amazon" />
        </div>


        </section>
      </main>
    </>
  )
}

export default Home
