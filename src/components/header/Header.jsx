import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-add-wrapper">
        <Link className="header-add">
          Get 10% off selected items when you spend £50 with code: YAY10
          *Exclusions apply
        </Link>
      </div>
      <div className="header-menu">
        <div className="header-menu-block header-menu-block-divider">
          <Link>
            FREE Sheer Tinted Lip Balm when you spend £40 on By BEAUTY <br />{" "}
            BAY
          </Link>
        </div>
        <div className="header-menu-block header-menu-block-divider">
          <Link>
            Ready, set, haul! These newbies belong in your <br /> collection
          </Link>
        </div>
        <div className="header-menu-block">
          <Link>
            Download the app for exclusive offers and <br /> discounts!
          </Link>
        </div>
        <div className="header-menu-block header-menu-block-item">
          <div>
            <Link className="header-menu-block-lang">
              <img
                src="https://www.beautybay.com/assets/flags/gb.png"
                alt="#"
                width={"24px"}
                height={"16px"}
                style={{ marginRight: 10 }}
              />
              EN
            </Link>
          </div>
          <div className="divider"></div>
          <div>
            <Link className="header-menu-block-lang">GPB</Link>
          </div>
        </div>
      </div>

      <div className="container">
        <nav className="nav">
          <div className="nav_logo">
            <Link to={"/"}>
              <svg
                height="48"
                viewBox="0 0 102 48"
                width="102"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m45.8376629 25c4.5896565 0 6.8247927 2.5681752 6.8247927 6.2144727 0 1.9973743-.9538097 3.5509067-2.4439005 4.3435428v.126959c1.8776154 1.0146428 2.8014212 2.790182 2.8014212 5.009563 0 1.0599363-.1485985 1.9930851-.4491117 2.7977308l1.4291354.8132241c-.9149625 2.4405299-3.2352152 3.6945076-7.0880379 3.6945076h-7.4803v-11.9751527l-1.4316621-.8145966v-10.2102507zm-23.8658289 0 7.1295433 1.3377843 4.8986227 6.1522732-.0198463 8.0135755-4.9292055 6.1253299-7.5318378 1.3710371-6.610611-4.0249488-1.9084994-5.541616 2.4272689.231064 1.2852927 3.7323245.3359232.2044619.62158-3.3326092 4.0776035-1.5272398c.2414093-.0728151 2.4558997-.8470076 1.9195613-4.4737759-.2728055-1.8439085.0346497-3.3791631.9132556-4.5631321.210013-.2829043.4401977-.5262463.6793295-.7359945l-2.4378428-.457524-.8503005-2.5094754zm43.3901577 0 6.6380083 23h-5.2026454l-1.1961877-4.5015819h-5.2026454l-1.1960319 4.5015819h-5.2024896l6.6376967-23zm12.2481537 0 .0752212.1955348 3.4004425 7.2835874 3.4917826-7.4791222h5.4224083l-10.7378319 23h-5.4225663l4.449273-9.5298409-6.2888748-13.4701591zm-46.8517638 7.0311694c-.358535.1718912-.7499303.436208-1.0474623.843256-.4818424.659769-.6376847 1.5923811-.4632974 2.7722575.6786787 4.5888816-1.9582779 6.6074097-3.4940895 7.0545315l-2.7586373 1.0364632-.317541 1.7022005 5.2039631-.947448 3.8928051-4.8373395.0156168-6.3285981zm-2.4438617-3.069145.0027654.0313769c-.0039041.0001706-1.2823645.1584196-2.0046401 1.1469647-.482005.6597689-.6378474 1.5925516-.4632974 2.7725985.6786787 4.5890522-1.9582779 6.6074098-3.4942522 7.0541905l-2.7586373 1.0364631-.5273913 2.8278493 1.4891241.9066921.5101478-2.7357647 4.0776035-1.5268988c.2414093-.072815 2.4560624-.8470076 1.9195613-4.474117-.2726428-1.8437379.0346497-3.3789925.9134183-4.563132.3979023-.5359664.8686828-.9305659 1.3345831-1.2216555zm17.0167079 9.0373788h-2.4121595l1.3988156.7957243.0012634.0101224v4.6925085h2.2352941c1.7032767 0 2.6433478-.4332047 2.8254244-1.8124258l-1.4303988-.8139103c.0211607-.1626448.0341098-.3357552.0341098-.525679 0-1.7753676-.9536518-2.3463401-2.652349-2.3463401zm17.7284491-5.8694015h-.1195097l-1.5548726 6.670101h3.229255zm-17.4601506-2.6275886h-2.712199v4.2169269h2.712199c1.4899328 0 2.0562179-.7293281 2.0562179-2.0927651 0-1.3951768-.5662851-2.1241618-2.0562179-2.1241618zm-36.35957342-29.5024131c2.40541862 0 4.16200612.6981014 5.28950132 1.88033399l-1.3989027 1.13083861c1.0120873 1.06933717 1.5125596 2.53183819 1.5125596 4.23263592 0 1.96958817-.952712 3.50147108-2.4407573 4.28300198v.1250587c1.8751791 1.0002979 2.7976462 2.7509478 2.7976462 4.939303 0 4.2204726-2.4106716 6.4088278-7.52968768 6.4088278h-7.47031232v-9.466769l1.41275164-1.1322091v-12.4010219zm80.37019252 0 .0752212.19553484 3.4004425 7.28358732 3.4917826-7.47912216h5.4224083l-10.7378319 23h-5.4225663l4.449115-9.5298409-6.2887168-13.4701591zm-60.6101454 0v4.66578326h-7.4432657v4.27146037h7.4432657v4.66578327h-7.4432657v4.7311898h7.4432657v4.6657833h-12v-23zm12.3619917 0 6.6380083 23h-5.2026454l-1.1961877-4.5015819h-5.2026454l-1.1960319 4.5015819h-5.2024896l6.6376967-23zm12.7261584 0v14.748447c0 2.1441883.6130379 3.5409748 2.9118499 3.5409748s2.9118499-1.3967865 2.9118499-3.5409748v-14.748447h5.0881501v15.0409748c0 5.0352706-2.6973345 7.9590252-8 7.9590252s-8-2.9237546-8-7.9590252v-15.0409748zm28.9118499 0v4.99435714h-5.4744515v18.00564286h-5.0208348v-18.00564286h-5.5047137v-4.99435714zm-75.67852405 13.9339327h-2.44059811v4.6266563h2.23238637c1.90478717 0 2.85702158-.5314136 2.85702158-2.3132425 0-1.7506499-.95223441-2.3134138-2.64880984-2.3134138zm31.73820095-6.80393099h-.1195097l-1.5548726 6.67010099h3.229255zm-30.05754384-2.69093336h-2.70850358v4.09233039l-1.41275164 1.14077478v.04128649h2.70850357c1.48804534 0 2.05362355-.71900162 2.05362355-2.0631252 0-.6527034-.12941601-1.15567904-.42215407-1.50601459l1.40431491-1.1255279c-.3248931-.38185719-.8473326-.57972397-1.62303274-.57972397z"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
          <div className="nav_input">
            <img
              src="https://images.beautybay.com/eoaaqxyywn6o/1c14w1y1okrT8BlKo6Yvgn/8fea41f0abbd34c3ae65f5c0d0def875/icons-search-alt.svg"
              alt=""
            />
            <input type="text" placeholder="Search products, brands" />
          </div>
          <div className="nav_profile">
            <Link>
              <svg
                width={"50px"}
                viewBox="0 0 432.13 63.25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m63.16 0v15.3h-40.29v8.08h39.01v15.73h-39.01v8.67h40.88v15.47h-63.75v-63.25z"></path>
                <path d="m75.45 0h37.23c34.51 0 42.16 15.56 42.16 29.84v2.55c0 14.45-6.97 30.86-42.16 30.86h-37.23zm22.95 46.92h11.56c18.87 0 20.91-8.84 20.91-15.22v-.51c0-6.12-2.12-14.96-20.91-14.96h-11.56z"></path>
                <path d="m187.88 63.25h-22.95v-63.25h22.95z"></path>
                <path d="m195.72 0h73.53v17.43h-25.33v45.82h-22.87v-45.82h-25.33z"></path>
                <path d="m340.44 0v15.3h-40.29v8.08h39.02v15.73h-39.02v8.67h40.89v15.47h-63.76v-63.25z"></path>
                <path d="m352.73 0h37.23c34.51 0 42.16 15.56 42.16 29.84v2.55c0 14.45-6.97 30.86-42.16 30.86h-37.23zm22.95 46.92h11.56c18.87 0 20.91-8.84 20.91-15.22v-.51c0-6.12-2.12-14.96-20.91-14.96h-11.56z"></path>
              </svg>
            </Link>
            <Link>
              <svg
                width={"50px"}
                viewBox="0 0 100 19.2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g enable-background="new">
                  <path d="m8.3 6.8h-6.6v-4.9h20.2v4.8h-6.6v10.5h-7z"></path>
                  <path d="m30.6 17.3h-7v-15.4h15.6c3.8 0 6.2 1.1 6.2 3.9v.2c0 2.3-2.1 3.2-3.3 3.5 2.2.4 3.4 1.8 3.4 3.8v2.3c0 .9.1 1.3.3 1.5v.1h-7.1c-.1-.1-.1-.3-.1-.6v-1.8c0-1.7-.8-2.6-3-2.6h-4.9v5.1zm0-9.1h6.2c1.2 0 1.6-.5 1.6-1.1 0-.6-.4-1.1-1.6-1.1h-6.2z"></path>
                  <path d="m54.3 17.3h-6.9v-15.4h6.9z"></path>
                  <path d="m56.4 1.9h15.8c4.6 0 5.8 1.7 5.8 3.5v.2c0 1.8-1.6 2.8-2.9 3 1.7.3 3.8 1.3 3.8 4v.2c0 2.4-1.6 4.5-6.6 4.5h-15.9zm7 3.8v1.8h6.1c1.1 0 1.5-.3 1.5-.9 0-.6-.4-.9-1.5-.9zm0 5.5v2.2h6.4c1.4 0 1.7-.5 1.7-1.1 0-.6-.3-1.1-1.7-1.1z"></path>
                  <path d="m98.2 1.9v4.1h-11v1.5h10.8v4h-10.8v1.7h11.1v4.1h-18v-15.4z"></path>
                </g>
              </svg>
            </Link>
            <Link>
              <svg
                widths={"50px"}
                height="36"
                viewBox="0 0 36 36"
                width="36"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m24 11v2h2c2.7614237 0 5 2.2385763 5 5v7l-2.0500973.0004345c-.231803 1.1409037-1.2405773 1.9995655-2.4499027 1.9995655s-2.2180997-.8586618-2.4499027-1.9995655h-10.1001946c-.231803 1.1409037-1.2405773 1.9995655-2.4499027 1.9995655s-2.21809967-.8586618-2.44990271-1.9995655l-4.05009729-.0004345v-1.5l4.20794546.0001748c.38573839-.8830457 1.26682734-1.5001748 2.29205454-1.5001748s1.9063162.6171291 2.2920545 1.5001748h10.415891c.3857383-.8830457 1.2668273-1.5001748 2.2920545-1.5001748s1.9063162.6171291 2.2920545 1.5001748l.7079455-.0001748v-4.5h-3.5v-3l2.872703.0000683c-.6324679-.9067805-1.6833006-1.5000683-2.872703-1.5000683h-2v7.5h-19v-11zm-12.5 12.5c-.5522847 0-1 .4477153-1 1s.4477153 1 1 1 1-.4477153 1-1-.4477153-1-1-1zm15 0c-.5522847 0-1 .4477153-1 1s.4477153 1 1 1 1-.4477153 1-1-.4477153-1-1-1zm-4-11h-16v8h16z"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </Link>
            <Link>
              <svg
                height="36"
                viewBox="0 0 36 36"
                width="36"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m17.5755724 18.75c-2.6923882 0-4.875-2.1826118-4.875-4.875s2.1826118-4.875 4.875-4.875c2.6923881 0 4.875 2.1826118 4.875 4.875s-2.1826119 4.875-4.875 4.875zm0-1.5c1.863961 0 3.375-1.511039 3.375-3.375s-1.511039-3.375-3.375-3.375c-1.8639611 0-3.375 1.511039-3.375 3.375s1.5110389 3.375 3.375 3.375zm3.3755709 3.75h-6.0030605c-1.939053-.0071271-3.7718992.7983132-5.03008929 2.1843787l.32594069.4058767 2.7334353 3.4097446h9.9464058l2.7338349-3.4102428.3255397-.4053771c-1.2580369-1.3858721-3.0907848-2.1912896-5.0320066-2.1843801zm6.5842085 2.6471141-.7077829.8813637-3.1837865 3.9715171h-11.3864201l-.2251756-.2808837-2.95821109-3.6901352-1.07397561-1.3373643.35211493-.4661565c1.53855701-2.0368588 3.99443067-3.2350439 6.59874287-3.2254603h5.9975939c2.6067565-.0092924 5.0622156 1.1888613 6.6005779 3.22546l.3521153.4661566z"></path>
              </svg>
            </Link>
            <Link to={"/wishlist"}>
              <svg
                className="wishlist-link"
                height="36"
                viewBox="0 0 36 36"
                width="36"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m25.9683552 9.21882515c3.2608181.80024215 5.5472476 3.70843205 5.5302621 7.02070785.0167706.8151169-.1192457 1.6262091-.4011081 2.3920749l-.0747211.2030295-12.8022428 9.8639172-12.75640108-9.9236157-.07145807-.2171752c-.24888993-.7564256-.38125398-1.5457388-.39268615-2.3532254.00533124-3.3241785 2.30112936-6.21297878 5.5578425-6.99897615 2.9473775-.7113402 5.994845.46537879 7.693908 2.88167155 1.7058655-2.42023178 4.7647874-3.59281834 7.7166047-2.86840855zm4.0304303 7.03234525c.0133197-2.6356293-1.7984492-4.9400818-4.3879391-5.5755723-2.5916285-.6360153-5.2853557.5658675-6.5186557 2.9056024l-.2109905.4002771h-1.2606673l-.2108023-.4010462c-1.2278635-2.3359801-3.9115803-3.5414353-6.4999721-2.9167351-2.58628854.6241925-4.40554267 2.913358-4.40983587 5.5313398.00812541.5692131.09284506 1.1345045.25168043 1.6810239l11.47335964 8.9254964 11.5331004-8.886064c.1708302-.531397.2523391-1.0890695.2407224-1.664322z"></path>
              </svg>
              <span></span>
            </Link>
            <Link to={"/cart"}>
              <svg
                className="cart-link"
                height="36"
                viewBox="0 0 36 36"
                width="36"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m16.5 14.5v1.5h-1.5v-1.5h-2.5v6.6646583l-1.6300759 7.3353417h15.2601518l-1.6300759-7.3353417v-6.6646583h-2.5v1.5h-1.5v-1.5zm4-1.5v-2.5c0-1.10457288-.8954271-2-2-2-1.1039845 0-2 .8958387-2 2v2.5zm5.5 8 2 9h-19l2-9v-8h4v-2.5c0-1.933 1.568-3.5 3.5-3.5 1.933 0 3.5 1.567 3.5 3.5v2.5h4z"></path>
              </svg>
            </Link>
          </div>
        </nav>
        <div className="nav-items">
          <ul className="nav-items_list">
            <li>
              <Link
                to={"/products"}
                className="nav-items_link nav-items_links-bold"
              >
                All
              </Link>
            </li>
            <li>
              <Link
                to={"/powder"}
                className="nav-items_link nav-items_links-bold"
              >
                Powder
              </Link>
            </li>
            <li>
              <Link
                to={"/cream"}
                className="nav-items_link nav-items_links-bold"
              >
                Cream
              </Link>
            </li>
            <li>
              <Link
                to={"/pencil"}
                className="nav-items_link nav-items_links-bold"
              >
                Pencil
              </Link>
            </li>
            <li>
              <Link
                to={"/palette"}
                className="nav-items_link nav-items_links-bold"
              >
                Pallette
              </Link>
            </li>
            <li>
              <Link className="nav-items_link">Makeup</Link>
            </li>
            <li>
              <Link className="nav-items_link">Skincare</Link>
            </li>
            <li>
              <Link className="nav-items_link">Haircare</Link>
            </li>
            <li>
              <Link className="nav-items_link">Fragrance</Link>
            </li>
            <li>
              <Link className="nav-items_link">Bath & Body</Link>
            </li>
            <li>
              <Link className="nav-items_link">Wellness</Link>
            </li>
            <li>
              <Link className="nav-items_link">Accessories</Link>
            </li>
            <li>
              <Link className="nav-items_link">Gifting</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
