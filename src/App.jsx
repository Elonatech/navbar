import './App.css';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function App() {

    const [techMouseEnter, setTechMouseEnter] = useState(true)
    const [digitalMouseEnter, setDigitalMouseEnter] = useState(false)
    const [salesMouseEnter, setSalesMouseEnter] = useState(false)

    const [hardwareMouseOver, setHardwareMouseOver] = useState(true)
    const [networkMouseOver, setNetworkMouseOver] = useState(false)
    const [systemMouseOver, setSystemMouseOver] = useState(false)
    const [telecomMouseOver, setTelecomMouseOver] = useState(false)
    const [softwareMouseOver, setSoftwareMouseOver] = useState(false)

    const [webMouseOver, setWebMouseOver] = useState(true)
    const [digitalMarketMouseOver, setDigitalMarketMouseOver] = useState(false)
    const [graphicsMouseOver, setGraphicsMouseOver] = useState(false)
    const [videoMouseOver , setVideoMouseOver] = useState(false)
    const [teleMouseOver, setTeleMouseOver] = useState(false)

    const [productsSlideNav1, setProductsSlideNav1] = useState(false)
    const [productsSlideNav2, setProductsSlideNav2] = useState(false)
    const [productsSlideNav3, setProductsSlideNav3] = useState(false)
    const [productsSlideNav4, setProductsSlideNav4] = useState(false)
  

    const handleTechMouseEnter = () => {
        setTechMouseEnter(true)
        setDigitalMouseEnter(false)
        setSalesMouseEnter(false)
      }
      const handleDigitalMouseEnter = () => {
        setDigitalMouseEnter(true)
        setSalesMouseEnter(false)
        setTechMouseEnter(false)
      }
      const handleSalesMouseEnter = () => {
        setSalesMouseEnter(true)
        setTechMouseEnter(false)
        setDigitalMouseEnter(false)
      }
      const handleHardwareMouseOver = () => {
        setHardwareMouseOver(true)
        setNetworkMouseOver(false)
        setSystemMouseOver(false)
        setTelecomMouseOver(false)
        setSoftwareMouseOver(false)
        console.log('Mouse entered')
      }
      const handleHardwareMouseLeave = () => {
        setHardwareMouseOver(false)
        setNetworkMouseOver(false)
        setSystemMouseOver(false)
        setTelecomMouseOver(false)
        setSoftwareMouseOver(false)
        console.log('Mouse left on a small screen')
      }
      const handleNetworkMouseOver = () => {
        setNetworkMouseOver(true)
        setHardwareMouseOver(false)
        setSystemMouseOver(false)
        setTelecomMouseOver(false)
        setSoftwareMouseOver(false)
      }
      const handleSystemMouseOver = () => {
        setSystemMouseOver(true)
        setNetworkMouseOver(false)
        setHardwareMouseOver(false)
        setTelecomMouseOver(false)
        setSoftwareMouseOver(false)
      }
      const handleTelecomMouseOver = () => {
        setTelecomMouseOver(true)
        setSystemMouseOver(false)
        setNetworkMouseOver(false)
        setHardwareMouseOver(false)
        setSoftwareMouseOver(false)
      }
      const handleSoftwareMouseOver = () => {
        setSoftwareMouseOver(true)
        setTelecomMouseOver(false)
        setSystemMouseOver(false)
        setNetworkMouseOver(false)
        setHardwareMouseOver(false)
      }

       // 
  const handleWebMouseOver = () => {
    setWebMouseOver(true)
    setDigitalMarketMouseOver(false)
    setGraphicsMouseOver(false)
    setVideoMouseOver(false)
    setTeleMouseOver(false)
  }
  const handleDigitalMarketMouseOver = () => {
    setDigitalMarketMouseOver(true)
    setWebMouseOver(false)
    setGraphicsMouseOver(false)
    setVideoMouseOver(false)
    setTeleMouseOver(false)
  }
  const handleGraphicsMouseOver = () => {
    setGraphicsMouseOver(true)
    setDigitalMarketMouseOver(false)
    setWebMouseOver(false)
    setVideoMouseOver(false)
    setTeleMouseOver(false)
  }
  const handleVideoMouseOver = () => {
    setVideoMouseOver(true)
    setGraphicsMouseOver(false)
    setDigitalMarketMouseOver(false)
    setWebMouseOver(false)
    setTeleMouseOver(false)
  }
  const handleTeleMouseOver = () => {
    setTeleMouseOver(true)
    setVideoMouseOver(false)
    setGraphicsMouseOver(false)
    setDigitalMarketMouseOver(false)
    setWebMouseOver(false)
  }


    // Products
    const handleProducts1 = () => {
        setProductsSlideNav1(true)
        setProductsSlideNav2(false)
        setProductsSlideNav3(false)
        setProductsSlideNav4(false)
      }
      const handleProducts2 = () => {
        setProductsSlideNav2(true)
        setProductsSlideNav1(false)
        setProductsSlideNav3(false)
        setProductsSlideNav4(false)
      }
      const handleProducts3 = () => {
        setProductsSlideNav3(true)
        setProductsSlideNav1(false)
        setProductsSlideNav2(false)
        setProductsSlideNav4(false)
      }
      const handleProducts4 = () => {
        setProductsSlideNav4(true)
        setProductsSlideNav1(false)
        setProductsSlideNav3(false)
        setProductsSlideNav2(false)
      }
      


  return (
    <div className=''>
    <nav class="container navbar navbar-expand-lg bg-transparent fixed-top">
       <div class="container-fluid">
           <a class="navbar-brand" href="#">ELONATECH</a>
           <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
           <span class="navbar-toggler-icon"></span>
           </button>
           <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
           <div class="offcanvas-header">
               <h5 class="offcanvas-title" id="offcanvasNavbarLabel">ELONATECH</h5>
               <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
           </div>
           <div class="offcanvas-body">
               <ul class="navbar-nav justify-content-end flex-grow-1 pe-0">
                   <li class="nav-item listItem">
                       <a class="nav-link active" aria-current="page" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
                       <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
                       </svg></a>
                   </li>
                   <li class="nav-item mx-0 mx-md-4 my-2 my-md-0 listItem"><a class="nav-link fw-bold" href="#">Solutions</a>
                       <ul className='innerListContainer'> 
                           <li className='innerListItemLeft'>
                               <ul className='innerListContentLeft'>
                                   <li className={techMouseEnter ? 'innerListItemContentLeftActive' : 'innerListItemContentLeft'} onMouseEnter={handleTechMouseEnter}>Tech Solutions</li>
                                   <li className={digitalMouseEnter ? 'innerListItemContentLeftActive' : 'innerListItemContentLeft'} onMouseEnter={handleDigitalMouseEnter}>Digital Solutions</li>
                                   <li className={salesMouseEnter ? 'innerListItemContentLeftActive' : 'innerListItemContentLeft'} onMouseEnter={handleSalesMouseEnter}>Sales</li>
                               </ul>
                           </li>
                           <hr className='line' />
                           <li className='innerListItemRight'>
                              <ul className='innerListContentRight'>
                                    {/* TECH SOLUTIONS ( RIGHTSIDE) */}
                                    <li className='innerListContentRight'>
                                    <ul className={techMouseEnter ? 'innerListItemContentRightTechListActive' : 'innerListItemContentRightTechList'}>
                                        {/* hardward solution */}
                                            <li className={'innerListItemContentRightTechListItem'} onMouseEnter={handleHardwareMouseOver} onMouseLeave={handleHardwareMouseLeave}><h6 className={hardwareMouseOver ? 'innerListItemContentRightTechListTitleActive' : 'innerListItemContentRightTechListTitle'}>Hardware Solutions</h6>
                                                <ul className={hardwareMouseOver ? 'hardwareSolutionsListActive' : 'hardwareSolutionsList'}>

                                                    <li className={'hardwareSolutionsListItem'}> <img src="https://img.icons8.com/dotty/80/000000/computer.png" alt="" style={{width: "50px", height: "50px", objectFit: "contain", alignSelf: "center"}}/> Computers</li>
                                                    
                                                    <li className={'hardwareSolutionsListItem'}> <img src="https://img.icons8.com/external-wanicon-lineal-wanicon/64/000000/external-printer-stationery-and-office-wanicon-lineal-wanicon.png" alt="" style={{width: "50px", height: "50px", objectFit: "contain", alignSelf: "center"}}/>Printers </li>
                                            
                                                    <li className={'hardwareSolutionsListItem'}> <img src="https://img.icons8.com/external-icongeek26-outline-icongeek26/64/000000/external-mobile-phone-devices-icongeek26-outline-icongeek26.png" alt="" style={{width: "50px", height: "50px", objectFit: "contain", alignSelf: "center"}}/>Mobile Devices</li>
                                                
                                                    <li className={'hardwareSolutionsListItem'}> <img src="https://img.icons8.com/ios/50/000000/outlet-switch.png" alt="" style={{width: "50px", height: "50px", objectFit: "contain", alignSelf: "center"}}/> Networking Equipments</li>
                                            
                                                </ul>
                                            </li>
                                        {/* network admin/eng */}
                                            <li className={'innerListItemContentRightTechListItem'} onMouseEnter={handleNetworkMouseOver}> <h6 className={networkMouseOver ? 'innerListItemContentRightTechListTitleActive' : 'innerListItemContentRightTechListTitle'}>Network Admin/Eng</h6> 
                                                <ul className={networkMouseOver ?'networkAdministrationListActive' : 'networkAdministrationList'}>
                                            
                                                    <li className={'networkAdministrationListItem'}> <img src="https://img.icons8.com/ios-filled/344/networking-manager.png" alt="" style={{alignSelf: "center", width: "50px", height: "50px", objectFit: "contain"}}/> Network Admin/Implementation </li>
                                            
                                                    <li className={'networkAdministrationListItem'}> <img src="https://cdn-icons-png.flaticon.com/128/9625/9625521.png" alt="" style={{alignSelf: "center", width: "50px", height: "50px", objectFit: "contain"}}/> Server Administration</li>

                                                    <li className={'networkAdministrationListItem'}> <img src="https://cdn-icons-png.flaticon.com/128/11498/11498221.png" alt="" style={{alignSelf: "center", width: "50px", height: "50px", objectFit: "contain"}}/> Infrastructure / System Integration </li>

                                                    <li className={'networkAdministrationListItem'}> <img src="https://cdn-icons-png.flaticon.com/128/11276/11276279.png" alt="" style={{alignSelf: "center", width: "50px", height: "50px", objectFit: "contain"}}/>  Structured cabling</li>

                                                    <li className={'networkAdministrationListItem'}> <img src="https://img.icons8.com/dotty/80/000000/wallmount-camera.png" alt="" style={{alignSelf: "center", width: "50px", height: "50px", objectFit: "contain"}}/> CCTV Installation</li>

                                                    <li className={'networkAdministrationListItem'}> <img src="https://cdn-icons-png.flaticon.com/128/10216/10216666.png" alt="" style={{alignSelf: "center", width: "50px", height: "50px", objectFit: "contain"}}/> Internet Solutions</li>

                                                    <li className={'networkAdministrationListItem'}> <img src="https://img.icons8.com/external-vectorslab-detailed-outline-vectorslab/68/000000/external-Network-Security-gdpr-vectorslab-detailed-outline-vectorslab.png" alt="" style={{alignSelf: "center", width: "50px", height: "50px", objectFit: "contain"}}/> Network Security</li>
                                                </ul>
                                            </li>
                                        {/* system security */}
                                            <li className={'innerListItemContentRightTechListItem'} onMouseEnter={handleSystemMouseOver}> <h6 className={systemMouseOver ? 'innerListItemContentRightTechListTitleActive' : 'innerListItemContentRightTechListTitle'}>System Security</h6> 
                                                <ul className={systemMouseOver ? 'systemSecurityListActive' : 'systemSecurityList'}>
                                                    <li className={'systemSecurityListListItem'}> <img src="https://img.icons8.com/wired/64/000000/behavior-blocker.png" alt="" style={{width: "50px", height: "50px", objectFit: "contain", alignSelf: "center"}}/> Access Control</li>
                                                    <li className={'systemSecurityListListItem'}> <img src="https://cdn-icons-png.flaticon.com/128/6997/6997891.png" alt="" style={{width: "50px", height: "50px", objectFit: "contain", alignSelf: "center"}}/> Time Management Solutions</li>
                                                    <li className={'systemSecurityListListItem'}> <img src="https://cdn-icons-png.flaticon.com/128/2408/2408767.png" alt="" style={{width: "50px", height: "50px", objectFit: "contain", alignSelf: "center"}}/> Surveilance</li>
                                                </ul>
                                            </li>
                                        {/* telecoms */}
                                            <li className={'innerListItemContentRightTechListItem'} onMouseEnter={handleTelecomMouseOver}><h6 className={telecomMouseOver ? 'innerListItemContentRightTechListTitleActive' : 'innerListItemContentRightTechListTitle'}>Telecoms</h6>
                                                <ul className={telecomMouseOver ? 'telecomsListActive' : 'telecomsList'}>
                                                    <li className={'telecomsListListItem'}> <img src="https://cdn0.iconfinder.com/data/icons/computer-networking-1-1/66/97-512.png" alt="" style={{width: "50px", height: "50px", objectFit: "contain", alignSelf: "center"}}/> IP Telephony & PBX Systems</li>
                                                    <li className={'telecomsListListItem'}> <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/voip-technology-2049624-1732701.png" alt="" style={{width: "50px", height: "50px", objectFit: "contain", alignSelf: "center"}}/> VoIP</li>
                                                </ul>
                                            </li>
                                        {/* software solution */}
                                            <li className={'innerListItemContentRightTechListItem'} onMouseEnter={handleSoftwareMouseOver}> <h6 className={softwareMouseOver ? 'innerListItemContentRightTechListTitleActive' : 'innerListItemContentRightTechListTitle'}>Software Solutions</h6> 
                                                <ul className={softwareMouseOver ? 'softwareSolutionsListActive' : 'softwareSolutionsList'}>
                                                    <li className={'softwareSolutionsListListItem'}> <img src="https://static.vecteezy.com/system/resources/previews/005/377/464/non_2x/upgrade-of-software-line-icon-computer-system-update-linear-pictogram-download-process-icon-progress-of-upgrade-illustration-vector.jpg" alt="" style={{width: "50px", height: "50px", objectFit: "contain", alignSelf: "center"}}/> System Software</li>
                                                    <li className={"softwareSolutionsListListItem"}> <img src="https://cdn-icons-png.flaticon.com/128/10435/10435278.png" alt="" style={{width: "50px", height: "50px", objectFit: "contain", alignSelf: "center"}}/>  Application Software</li>
                                                    <li className={"softwareSolutionsListListItem"}> <img src="https://cdn-icons-png.flaticon.com/128/9518/9518692.png" alt="" style={{width: "50px", height: "50px", objectFit: "contain", alignSelf: "center"}}/>  Business Application Software</li>
                                                </ul>
                                            </li>
                                                                                                                        
                                        </ul>
                                    </li>

                                    {/* DIGITAL SOLUTION CONTENT ( RIGHTSIDE) */}
                                    <li className='innerListContentRight'>
                                        <ul className={digitalMouseEnter ? 'innerListItemContentRightDigitalListActive' : 'innerListItemContentRightDigitalList'}>
                                            {/* web solution */}
                                            <li className={'innerListItemContentRightDigitalListItem'} onMouseEnter={handleWebMouseOver}><h6 className={webMouseOver ? 'innerListItemContentRightTechListTitleActive' : 'innerListItemContentRightTechListTitle'}>Web Solutions</h6>
                                                <ul className={webMouseOver ? 'webSolutionsListActive' : 'webSolutionsList'}>
                                                    <li className='webSolutionsListItem'> <img src="https://img.icons8.com/ios/50/000000/developer-mode--v1.png" alt="" style={{width: "50px", height: "50px", objectFit: "contain", alignSelf: 'center'}}/>    Web Design/Dev.</li>
                                                    <li className='webSolutionsListItem'> <img src="https://cdn-icons-png.flaticon.com/512/921/921515.png" alt="" style={{width: "50px", height: "50px", objectFit: "contain", alignSelf: 'center'}}/> Domain Reg./DNS Mgt </li>
                                                    <li className='webSolutionsListItem'> <img src="https://cdn-icons-png.flaticon.com/512/860/860276.png" alt="" style={{width: "50px", height: "50px", objectFit: "contain", alignSelf: 'center'}}/>   Web Hosting/Customized Email</li>
                                                </ul>
                                            </li>
                                            {/* digital marketing */}
                                            <li className={'innerListItemContentRightDigitalListItem'} onMouseEnter={handleDigitalMarketMouseOver}><h6 className={digitalMarketMouseOver? 'innerListItemContentRightTechListTitleActive' : 'innerListItemContentRightTechListTitle'}>Digital Marketing</h6>
                                                <ul className={digitalMarketMouseOver ? 'digitalMarketingListActive' : 'digitalMarketingList'}>
                                                    <li className={'digitalMarketingListItem'}> <img src="https://cdn-icons-png.flaticon.com/512/1997/1997928.png" alt="" style={{width: "50px", height: "50px", objectFit: "contain", alignSelf: 'center'}}/>    Social Media Marketing</li>
                                                    <li className={'digitalMarketingListItem'}> <img src="https://cdn-icons-png.flaticon.com/512/5599/5599556.png" alt="" style={{width: "50px", height: "50px", objectFit: "contain", alignSelf: 'center'}}/> Email Marketing</li>
                                                    <li className={'digitalMarketingListItem'}> <img src="https://img.icons8.com/external-yogi-aprelliyanto-glyph-yogi-aprelliyanto/32/000000/external-seo-marketing-and-seo-yogi-aprelliyanto-glyph-yogi-aprelliyanto-2.png" alt="" style={{width: "50px", height: "50px", objectFit: "contain", alignSelf: 'center'}}/> SEO</li>
                                                    <li className={'digitalMarketingListItem'}> <img src="https://cdn-icons-png.flaticon.com/512/2405/2405070.png" alt="" style={{width: "50px", height: "50px", objectFit: "contain", alignSelf: 'center'}}/>  Content Marketing</li>
                                                    <li className={'digitalMarketingListItem'}> <img src="https://img.icons8.com/external-smashingstocks-hand-drawn-black-smashing-stocks/99/000000/external-ppc-shipping-delivery-and-fulfillment-smashingstocks-hand-drawn-black-smashing-stocks.png" alt="" style={{width: "50px", height: "50px", objectFit: "contain", alignSelf: 'center'}}/>  PPC/CPI</li>
                                                </ul>
                                            </li>
                                            {/* graphic */}
                                            <li className={'innerListItemContentRightDigitalListItem'} onMouseEnter={handleGraphicsMouseOver}><h6 className={graphicsMouseOver? 'innerListItemContentRightTechListTitleActive' : 'innerListItemContentRightTechListTitle'}>Graphics</h6>
                                                <ul className={graphicsMouseOver ? 'graphicsListActive' : 'graphicsList'}>
                                                    <li className='graphicsListListItem'> <img src="https://cdn-icons-png.flaticon.com/512/1253/1253360.png" alt="" style={{width: "50px", height: "50px", objectFit: "contain", alignSelf: 'center'}}/> Brand Development</li>
                                                    <li className='graphicsListListItem'> <img src="https://cdn-icons-png.flaticon.com/512/6497/6497701.png" alt="" style={{width: "50px", height: "50px", objectFit: "contain", alignSelf: 'center'}}/> UI/UX & Prototyping</li>
                                                </ul>
                                            </li>
                                            {/* video animation */}
                                            <li className={'innerListItemContentRightDigitalListItem'} onMouseEnter={handleVideoMouseOver}><h6 className={videoMouseOver? 'innerListItemContentRightTechListTitleActive' : 'innerListItemContentRightTechListTitle'}>Video Animations</h6>
                                                <ul className={videoMouseOver ? 'videoAnimationsListActive' : 'videoAnimationsList'}>
                                                    <li className='videoAnimationsListListItem'> <img src="https://img.icons8.com/dotty/80/000000/3d-select.png" alt="" style={{width: "50px", height: "50px", objectFit: "contain", alignSelf: 'center'}}/> 2D/3D Animations</li>
                                                    <li className='videoAnimationsListListItem'> <img src="https://cdn-icons-png.flaticon.com/128/1633/1633071.png" alt="" style={{width: "50px", height: "50px", objectFit: "contain", alignSelf: 'center'}}/> Motion Graphics</li>
                                                    <li className='videoAnimationsListListItem'> <img src="https://img.icons8.com/ios-filled/50/000000/video-editing.png" alt="" style={{width: "50px", height: "50px", objectFit: "contain", alignSelf: 'center'}}/> Video Editing</li>
                                                </ul>
                                            </li>
                                             {/* teleconferencing */}
                                            <li  className={'innerListItemContentRightDigitalListItem'} onMouseEnter={handleTeleMouseOver}><h6 className={teleMouseOver? 'innerListItemContentRightTechListTitleActive' : 'innerListItemContentRightTechListTitle'}>Teleconferencing</h6>
                                                <ul className={teleMouseOver ? 'teleconferencingListActive' : 'teleconferencingList'}>
                                                    <li className='teleconferencingListListItem'> <img src="https://cdn-icons-png.flaticon.com/512/2177/2177994.png" alt="" style={{width: "50px", height: "50px", objectFit: "contain", alignSelf: 'center', marginBottom: '1rem'}}/> Livestreaming</li>
                                                    <li className='teleconferencingListListItem'> <img src="https://cdn-icons-png.flaticon.com/512/3169/3169113.png" alt="" style={{width: "50px", height: "50px", objectFit: "contain", alignSelf: 'center', marginBottom: '1rem'}}/>  Videoconferencing</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>

                                        {/* SALE CONTENT ( RIGHTSIDE) */}
                                    <li className='innerListContentRight'>
                                        <ul className={salesMouseEnter ? 'innerListItemContentRightSalesListActive' : 'innerListItemContentRightSalesList'}>
                                            <li className='innerListItemContentRightSalesListItem'> <img src="https://img.icons8.com/ios/50/000000/workstation.png" alt="" style={{width: "50px", height: "50px", objectFit: "contain", alignSelf: 'center', marginBottom: '1rem'}}/> Computer Equipments </li>
                                            <li className='innerListItemContentRightSalesListItem'> <img src="https://img.icons8.com/external-simple-solid-edt.graphics/50/000000/external-Printer-printers-simple-solid-edt.graphics-10.png" alt="" style={{width: "50px", height: "50px", objectFit: "contain", alignSelf: 'center', marginBottom: '1rem'}}/> Printers, Copiers, Scanners </li>
                                            <li className='innerListItemContentRightSalesListItem'> <img src="https://img.icons8.com/dotty/80/000000/home-office.png" alt="" style={{width: "50px", height: "50px", objectFit: "contain", alignSelf: 'center', marginBottom: '1rem'}}/> Office Equipments </li>
                                            <li className='innerListItemContentRightSalesListItem'> <img src="https://img.icons8.com/external-itim2101-fill-itim2101/64/1A1A1A/external-networking-network-technology-itim2101-fill-itim2101-1.png" alt="" style={{width: "50px", height: "50px", objectFit: "contain", alignSelf: 'center', marginBottom: '1rem'}}/> Networking Equipments </li>
                                            <li className='innerListItemContentRightSalesListItem'> <img src="https://img.icons8.com/ios/50/000000/receipt-terminal.png" alt="" style={{width: "50px", height: "50px", objectFit: "contain", alignSelf: 'center', marginBottom: '1rem'}}/>  POS System </li>
                                        </ul>
                                    </li>
                              </ul>
                           </li>
                       </ul>
                   </li>




                    {/* PRODUCT */}
                   <li class="nav-item mx-0 mx-md-4 my-2 my-md-0 listItem"><a class="nav-link fw-bold" href="#">Product</a>
                   <div className={productsSlideNav1 || productsSlideNav2 || productsSlideNav3 || productsSlideNav4 ? 'mainDropdownActive' : 'mainDropdown'}>
                        <div className={'mainDropdownLeft'}>
                            <ul className={'mainDropdownLeftList'}>
                                <li className={productsSlideNav1 ? 'mainDropdownLeftListItemActive' : 'mainDropdownLeftListItem'} onClick={handleProducts1}>
                                Computers <span className={'displayArrow'}><i className="fa fa-arrow-right" aria-hidden="true" /></span>
                                </li>
                                <li className={productsSlideNav2 ? 'mainDropdownLeftListItemActive' : 'mainDropdownLeftListItem'} onClick={handleProducts2}>
                                Printers<span className={'displayArrow'}><i className="fa fa-arrow-right" aria-hidden="true" /></span>
                                </li>
                                <li className={productsSlideNav3 ? 'mainDropdownLeftListItemActive' : 'mainDropdownLeftListItem'} onClick={handleProducts3}>
                                Office Equipment<span className={'displayArrow'}><i className="fa fa-arrow-right" aria-hidden="true" /></span>
                                </li>
                                <li className={productsSlideNav4 ? 'mainDropdownLeftListItemActive' : 'mainDropdownLeftListItem'} onClick={handleProducts4}>
                                POS Systems<span className={'displayArrow'}><i className="fa fa-arrow-right" aria-hidden="true" /></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                   </li>

                   {/* SUPPORT */}
                   <li class="nav-item mx-0 mx-md-4 my-2 my-md-0 listItem"><a class="nav-link fw-bold" href="#">Support</a>
                   <div className={'mainDropdown'}>
                        <div className={'mainDropdownLeft'}>
                        <ul className={'mainDropdownLeftList'}>
                            <li className={'mainDropdownLeftListItem'}>
                            Technical Support <span className={'displayArrow'}><i className="fa fa-arrow-right" aria-hidden="true" /></span>
                            </li>
                            <li className={'mainDropdownLeftListItem'}>
                            Network Support<span className={'displayArrow'}><i className="fa fa-arrow-right" aria-hidden="true" /></span>
                            </li>
                            <li className={'mainDropdownLeftListItem'}>
                            Remote Support<span className={'displayArrow'}><i className="fa fa-arrow-right" aria-hidden="true" /></span>
                            </li>
                            
                        </ul>
                        </div>
                    </div>  
                   </li>

                   {/* WHO WE ARE */}
                   <li class="nav-item mx-0 mx-md-4 my-2 my-md-0 listItem"><a class="nav-link fw-bold" href="#">Who We Are </a>
                   <div className={'mainDropdown'}>
                        <div className={'mainDropdownLeft'}>
                        <ul className={'mainDropdownLeftList'}>
                            <li className={'mainDropdownLeftListItem'}>
                            Our Company <span className={'displayArrow'}><i className="fa fa-arrow-right" aria-hidden="true" /></span>
                            </li>
                            <li className={'mainDropdownLeftListItem'}>
                            Our Portfolio<span className={'displayArrow'}><i className="fa fa-arrow-right" aria-hidden="true" /></span>
                            </li>
                            <li className={'mainDropdownLeftListItem'}>
                            Our Team<span className={'displayArrow'}><i className="fa fa-arrow-right" aria-hidden="true" /></span>
                            </li>
                            <li className={'mainDropdownLeftListItem'}>
                            Blog<span className={'displayArrow'}><i className="fa fa-arrow-right" aria-hidden="true" /></span>
                            </li>
                            <li className={'mainDropdownLeftListItem'}>
                            Career<span className={'displayArrow'}><i className="fa fa-arrow-right" aria-hidden="true" /></span>
                            </li>
                        </ul>
                        </div>
                    </div>
                   </li>

                   {/* GET IN TOUCH */}
                   <li class="nav-item mx-0 mx-md-4 my-2 my-md-0 listItem"><a class="nav-link fw-bold" href="#">Get In Touch</a>
                    
                   </li>
               {/* <li class="nav-item dropdown">
                   <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                   Dropdown
                   </a>
                   <ul class="dropdown-menu">
                   <li><a class="dropdown-item" href="#">Action</a></li>
                   <li><a class="dropdown-item" href="#">Another action</a></li>
                   <li>
                       <hr class="dropdown-divider"/>
                   </li>
                   <li><a class="dropdown-item" href="#">Something else here</a></li>
                   </ul>
               </li> */}
               </ul>
               {/* <form class="d-flex mt-3" role="search">
               <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
               <button class="btn btn-outline-success" type="submit">Search</button>
               </form> */}
           </div>
           </div>
       </div>
    </nav>
   </div>
  );
}

export default App;
