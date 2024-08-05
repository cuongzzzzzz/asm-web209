import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ProductDetails = () => {
  const { id } = useParams()
  const [product, setProduct] = useState<any>({})
  const fetchOneProducts = async (id: number | string | undefined) => {
    try {

      const data = await axios.get(`http://localhost:3000/products/${id}`)
      setProduct(data.data)
    } catch (error) {
      console.log(error)

    }

  }
  useEffect(() => {
    fetchOneProducts(id)
  }, [])
  return (
    <>
      <div className='w-full h-auto'>
        <div className="w-full h-auto flex justify-center py-[100px] px-[100px]">
          <div className='w-full h-full flex flex-col gap-5'>
            <div className='w-full h-[370px] flex justify-center items-center'>
              <img
                src={product.imgUrl}
                alt=""
                className='w-[355px] h-[355px]'
              />
            </div>

            <div className='w-full h-[106px] flex justify-center gap-5'>
              <img
                src="https://s3-alpha-sig.figma.com/img/947c/e576/b9259d343e725e484f9ce67bfa334d79?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qQNk5~WJgyqf7P90ahs6DBJSW8F-Oz0yEdrn-H8eJjGwFCSe~8wtT-4Izc5OnZPlGmo-zr61psqVlPkPxVB5q6fzaDbi99AN-ckGcMFVgUdL9kWpdXeuwc~eyQiu3w2n9cTLjNtvSew7BUWNwOdDgZJNEQHYjnGXybsl4rlvsP8vSKnHPdqj9TVk3IsqrqSCRAt-EmilcmIuVkTEaZU3RDOH25kh8AePBddLSdumXSj~Tk0wAVpB0z7SjUK7G~zvq9l1Vtg-Aj3jQ3xrel1WmiMZZ3Dr69S18Yfi7e7HjcLjf8UO5OXyC9eVh-d1UHPgqR~1C4hsBdNfarBLQxNaKQ__"
                alt=""
                className='w-[106px] h-[106px] border rounded-lg border-black'
              />
              <img
                src="https://s3-alpha-sig.figma.com/img/947c/e576/b9259d343e725e484f9ce67bfa334d79?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qQNk5~WJgyqf7P90ahs6DBJSW8F-Oz0yEdrn-H8eJjGwFCSe~8wtT-4Izc5OnZPlGmo-zr61psqVlPkPxVB5q6fzaDbi99AN-ckGcMFVgUdL9kWpdXeuwc~eyQiu3w2n9cTLjNtvSew7BUWNwOdDgZJNEQHYjnGXybsl4rlvsP8vSKnHPdqj9TVk3IsqrqSCRAt-EmilcmIuVkTEaZU3RDOH25kh8AePBddLSdumXSj~Tk0wAVpB0z7SjUK7G~zvq9l1Vtg-Aj3jQ3xrel1WmiMZZ3Dr69S18Yfi7e7HjcLjf8UO5OXyC9eVh-d1UHPgqR~1C4hsBdNfarBLQxNaKQ__"
                alt=""
                className='w-[106px] h-[106px]'
              />
              <img
                src="https://s3-alpha-sig.figma.com/img/947c/e576/b9259d343e725e484f9ce67bfa334d79?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qQNk5~WJgyqf7P90ahs6DBJSW8F-Oz0yEdrn-H8eJjGwFCSe~8wtT-4Izc5OnZPlGmo-zr61psqVlPkPxVB5q6fzaDbi99AN-ckGcMFVgUdL9kWpdXeuwc~eyQiu3w2n9cTLjNtvSew7BUWNwOdDgZJNEQHYjnGXybsl4rlvsP8vSKnHPdqj9TVk3IsqrqSCRAt-EmilcmIuVkTEaZU3RDOH25kh8AePBddLSdumXSj~Tk0wAVpB0z7SjUK7G~zvq9l1Vtg-Aj3jQ3xrel1WmiMZZ3Dr69S18Yfi7e7HjcLjf8UO5OXyC9eVh-d1UHPgqR~1C4hsBdNfarBLQxNaKQ__"
                alt=""
                className='w-[106px] h-[106px]'
              />

            </div>
          </div>
          <div className='w-full h-full'>
            <div>
              <span className='text-[16px] text-[#4E7C32] font-bold'>{product.category}</span>
            </div>
            <div className='mt-3 w-3/4'>
              <span className='text-[44px] text-[#1D2025] font-bold'>{product.name}</span>
            </div>
            <div className='mt-3 w-3/4'>
              <span className='text-[16px] text-[#68707D]'>{product.desc}</span>
            </div>
            <div className='flex mt-3 items-center gap-3'>
              <div className='text-[30px] font-bold'>
                ${product.price}
              </div>
              <div className='w-auto h-[30px] text-[#505F4E] bg-[#FFEDE0] p-1 rounded-sm'>
                {product.discount}%
              </div>
            </div>
            <div className='mt-3 '>
              <del><span className='text-[16px] font-bold'>$250.00</span></del>
            </div>
            <div className='flex gap-4 mt-3'>
              <div className='w-[157px] bg-[#F7F8FD] flex rounded-lg h-[55px]'>
                <button className='flex-1 font-bold text-xl'>-</button>
                <input type="number" value={3} className='w-1/2 border-none bg-[#F7F8FD] ' />
                <button className='flex-1 font-bold text-xl'>+</button>
              </div>

              <div className='w-auto h-auto'>
                <button className='bg-[#4E7C32] flex text-white justify-center items-center gap-2 h-[55px] w-[273px] rounded-lg font-semibold'>
                  <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.1695 3.08621H2.98525L2.78975 0.903251C2.7743 0.73094 2.69491 0.570655 2.56719 0.453954C2.43948 0.337253 2.27271 0.272594 2.0997 0.272705H0.69334C0.509714 0.272705 0.333609 0.34565 0.203765 0.475494C0.0739218 0.605337 0.000976563 0.781443 0.000976562 0.965069C0.000976563 1.1487 0.0739218 1.3248 0.203765 1.45464C0.333609 1.58449 0.509714 1.65743 0.69334 1.65743H1.46607L2.26275 10.5307C2.31916 11.1705 2.66457 11.8644 3.26034 12.3358C2.18702 13.7066 3.16761 15.7273 4.91398 15.7273C6.36284 15.7273 7.38438 14.2823 6.88752 12.913H10.6777C10.1817 14.2807 11.2009 15.7273 12.6521 15.7273C13.2087 15.7266 13.7424 15.5052 14.136 15.1116C14.5296 14.718 14.751 14.1844 14.7516 13.6278C14.751 13.0711 14.5296 12.5375 14.136 12.1439C13.7424 11.7503 13.2087 11.5289 12.6521 11.5283H4.91861C4.39239 11.5283 3.93416 11.2114 3.73634 10.7486L14.8026 10.0979C14.9498 10.0893 15.0904 10.034 15.204 9.93986C15.3175 9.84577 15.3981 9.71786 15.4339 9.5748L16.841 3.94702C16.8665 3.84488 16.8684 3.73827 16.8465 3.6353C16.8246 3.53232 16.7796 3.43568 16.7148 3.35271C16.65 3.26974 16.5671 3.20262 16.4725 3.15645C16.3779 3.11027 16.274 3.08625 16.1687 3.08621H16.1695ZM4.9132 14.3425C4.72938 14.334 4.55592 14.2549 4.42886 14.1218C4.3018 13.9887 4.2309 13.8118 4.2309 13.6278C4.2309 13.4437 4.3018 13.2668 4.42886 13.1337C4.55592 13.0006 4.72938 12.9215 4.9132 12.913C5.09702 12.9215 5.27048 13.0006 5.39755 13.1337C5.52461 13.2668 5.5955 13.4437 5.5955 13.6278C5.5955 13.8118 5.52461 13.9887 5.39755 14.1218C5.27048 14.2549 5.09702 14.334 4.9132 14.3425ZM12.6521 14.3425C12.4682 14.334 12.2948 14.2549 12.1677 14.1218C12.0407 13.9887 11.9698 13.8118 11.9698 13.6278C11.9698 13.4437 12.0407 13.2668 12.1677 13.1337C12.2948 13.0006 12.4682 12.9215 12.6521 12.913C12.8359 12.9215 13.0093 13.0006 13.1364 13.1337C13.2635 13.2668 13.3344 13.4437 13.3344 13.6278C13.3344 13.8118 13.2635 13.9887 13.1364 14.1218C13.0093 14.2549 12.8359 14.334 12.6521 14.3425ZM14.2137 8.74566L3.55011 9.37157L3.10966 4.47171H15.2824L14.2137 8.74489V8.74566Z" fill="white" />
                  </svg>
                  add to cart
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full h-auto flex flex-col px-60 mt-5'>
          <span className='text-[#4E7C32] text-[30px]'>
            Discription
          </span>

          <span className='text-[#665345] text-[20px]'>
          {product.desc}
          </span>
        </div>

        <div className='w-full h-auto flex flex-col px-60 mt-5'>
          <span className='text-[#4E7C32] text-[30px]'>
            About
          </span>

          <span className='text-[#665345] font-sans text-[20px]'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled i
          </span>
        </div>

        <div className='px-60 mt-10'>
          <div className='flex justify-between'>
            <div className='flex'>
              <div>
                <img src="https://s3-alpha-sig.figma.com/img/947c/e576/b9259d343e725e484f9ce67bfa334d79?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qQNk5~WJgyqf7P90ahs6DBJSW8F-Oz0yEdrn-H8eJjGwFCSe~8wtT-4Izc5OnZPlGmo-zr61psqVlPkPxVB5q6fzaDbi99AN-ckGcMFVgUdL9kWpdXeuwc~eyQiu3w2n9cTLjNtvSew7BUWNwOdDgZJNEQHYjnGXybsl4rlvsP8vSKnHPdqj9TVk3IsqrqSCRAt-EmilcmIuVkTEaZU3RDOH25kh8AePBddLSdumXSj~Tk0wAVpB0z7SjUK7G~zvq9l1Vtg-Aj3jQ3xrel1WmiMZZ3Dr69S18Yfi7e7HjcLjf8UO5OXyC9eVh-d1UHPgqR~1C4hsBdNfarBLQxNaKQ__" alt=""
                  className='w-[183px] h-[183px]'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <div className='flex '>
                  <img className='w-[32px] h-[31px]' src="https://s3-alpha-sig.figma.com/img/0545/2915/ecc7650c5e2b552f269bd6d65effcc24?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vj8EdmVQoi5rrriqOKd6T~lJd98mV5MQjzD8ZEqJDHZiIAkhiVtj5QHv68smrtWOo7E5Q88SM1YjQfxDzY24mcTUdzOKUpjIGsl8qGkxuCXrHotuefWpIpO2Kld0txe35ZFvBqWTu~0q7Gkn8--DUFRE3M3Oktv0W-o4sg6iOZQ~7rp5zOgPdP6aBoW1RSwxCH2zS32i1ZGLcmL6wAQUGdFqYWOhkZ1D7kVlXOHHIosoIBzjnyGsTGyWmf2Rc9u4lK3mepcthu8ySHN5pGEdgsu8w~0uz0bwzVI4zv1ejQ76NTHgDtFYlGGYybezsIOt3SI4gEtTODSAieu7KP8Cug__" alt="" />
                  <img className='w-[32px] h-[31px]' src="https://s3-alpha-sig.figma.com/img/0545/2915/ecc7650c5e2b552f269bd6d65effcc24?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vj8EdmVQoi5rrriqOKd6T~lJd98mV5MQjzD8ZEqJDHZiIAkhiVtj5QHv68smrtWOo7E5Q88SM1YjQfxDzY24mcTUdzOKUpjIGsl8qGkxuCXrHotuefWpIpO2Kld0txe35ZFvBqWTu~0q7Gkn8--DUFRE3M3Oktv0W-o4sg6iOZQ~7rp5zOgPdP6aBoW1RSwxCH2zS32i1ZGLcmL6wAQUGdFqYWOhkZ1D7kVlXOHHIosoIBzjnyGsTGyWmf2Rc9u4lK3mepcthu8ySHN5pGEdgsu8w~0uz0bwzVI4zv1ejQ76NTHgDtFYlGGYybezsIOt3SI4gEtTODSAieu7KP8Cug__" alt="" />
                  <img className='w-[32px] h-[31px]' src="https://s3-alpha-sig.figma.com/img/0545/2915/ecc7650c5e2b552f269bd6d65effcc24?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vj8EdmVQoi5rrriqOKd6T~lJd98mV5MQjzD8ZEqJDHZiIAkhiVtj5QHv68smrtWOo7E5Q88SM1YjQfxDzY24mcTUdzOKUpjIGsl8qGkxuCXrHotuefWpIpO2Kld0txe35ZFvBqWTu~0q7Gkn8--DUFRE3M3Oktv0W-o4sg6iOZQ~7rp5zOgPdP6aBoW1RSwxCH2zS32i1ZGLcmL6wAQUGdFqYWOhkZ1D7kVlXOHHIosoIBzjnyGsTGyWmf2Rc9u4lK3mepcthu8ySHN5pGEdgsu8w~0uz0bwzVI4zv1ejQ76NTHgDtFYlGGYybezsIOt3SI4gEtTODSAieu7KP8Cug__" alt="" />
                  <img className='w-[32px] h-[31px]' src="https://s3-alpha-sig.figma.com/img/0545/2915/ecc7650c5e2b552f269bd6d65effcc24?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vj8EdmVQoi5rrriqOKd6T~lJd98mV5MQjzD8ZEqJDHZiIAkhiVtj5QHv68smrtWOo7E5Q88SM1YjQfxDzY24mcTUdzOKUpjIGsl8qGkxuCXrHotuefWpIpO2Kld0txe35ZFvBqWTu~0q7Gkn8--DUFRE3M3Oktv0W-o4sg6iOZQ~7rp5zOgPdP6aBoW1RSwxCH2zS32i1ZGLcmL6wAQUGdFqYWOhkZ1D7kVlXOHHIosoIBzjnyGsTGyWmf2Rc9u4lK3mepcthu8ySHN5pGEdgsu8w~0uz0bwzVI4zv1ejQ76NTHgDtFYlGGYybezsIOt3SI4gEtTODSAieu7KP8Cug__" alt="" />
                  <img className='w-[32px] h-[31px]' src="https://s3-alpha-sig.figma.com/img/0545/2915/ecc7650c5e2b552f269bd6d65effcc24?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vj8EdmVQoi5rrriqOKd6T~lJd98mV5MQjzD8ZEqJDHZiIAkhiVtj5QHv68smrtWOo7E5Q88SM1YjQfxDzY24mcTUdzOKUpjIGsl8qGkxuCXrHotuefWpIpO2Kld0txe35ZFvBqWTu~0q7Gkn8--DUFRE3M3Oktv0W-o4sg6iOZQ~7rp5zOgPdP6aBoW1RSwxCH2zS32i1ZGLcmL6wAQUGdFqYWOhkZ1D7kVlXOHHIosoIBzjnyGsTGyWmf2Rc9u4lK3mepcthu8ySHN5pGEdgsu8w~0uz0bwzVI4zv1ejQ76NTHgDtFYlGGYybezsIOt3SI4gEtTODSAieu7KP8Cug__" alt="" />
                </div>

                <div className='flex gap-2 justify-center items-center'>
                  <span className='text-[#4E7C32] text-[32px]'>5.0</span>(388)
                </div>
              </div>
            </div>

            <div>
              <button className='bg-[#4E7C32] w-[118px] h-[34px] flex justify-center items-center rounded-full text-white'>Write reviews</button>
            </div>
          </div>

          <div className='flex flex-col items-start mt-3 mb-6'>
            <span className='flex justify-center items-center gap-2'>
              1
              <img className='w-[11px] h-[10px]' src="https://s3-alpha-sig.figma.com/img/0545/2915/ecc7650c5e2b552f269bd6d65effcc24?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vj8EdmVQoi5rrriqOKd6T~lJd98mV5MQjzD8ZEqJDHZiIAkhiVtj5QHv68smrtWOo7E5Q88SM1YjQfxDzY24mcTUdzOKUpjIGsl8qGkxuCXrHotuefWpIpO2Kld0txe35ZFvBqWTu~0q7Gkn8--DUFRE3M3Oktv0W-o4sg6iOZQ~7rp5zOgPdP6aBoW1RSwxCH2zS32i1ZGLcmL6wAQUGdFqYWOhkZ1D7kVlXOHHIosoIBzjnyGsTGyWmf2Rc9u4lK3mepcthu8ySHN5pGEdgsu8w~0uz0bwzVI4zv1ejQ76NTHgDtFYlGGYybezsIOt3SI4gEtTODSAieu7KP8Cug__" alt="" />
              <div className='bg-[#A2A0A0] w-[447px] h-[10px] rounded-sm'></div>
              (388)
            </span>
            <span className='flex justify-center items-center gap-2'>
              2
              <img className='w-[11px] h-[10px]' src="https://s3-alpha-sig.figma.com/img/0545/2915/ecc7650c5e2b552f269bd6d65effcc24?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vj8EdmVQoi5rrriqOKd6T~lJd98mV5MQjzD8ZEqJDHZiIAkhiVtj5QHv68smrtWOo7E5Q88SM1YjQfxDzY24mcTUdzOKUpjIGsl8qGkxuCXrHotuefWpIpO2Kld0txe35ZFvBqWTu~0q7Gkn8--DUFRE3M3Oktv0W-o4sg6iOZQ~7rp5zOgPdP6aBoW1RSwxCH2zS32i1ZGLcmL6wAQUGdFqYWOhkZ1D7kVlXOHHIosoIBzjnyGsTGyWmf2Rc9u4lK3mepcthu8ySHN5pGEdgsu8w~0uz0bwzVI4zv1ejQ76NTHgDtFYlGGYybezsIOt3SI4gEtTODSAieu7KP8Cug__" alt="" />
              <div className='bg-[#D9D9D9] w-[69px] h-[10px] rounded-sm'></div>
            </span>
            <span className='flex justify-center items-center gap-2'>
              1
              <img className='w-[11px] h-[10px]' src="https://s3-alpha-sig.figma.com/img/0545/2915/ecc7650c5e2b552f269bd6d65effcc24?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vj8EdmVQoi5rrriqOKd6T~lJd98mV5MQjzD8ZEqJDHZiIAkhiVtj5QHv68smrtWOo7E5Q88SM1YjQfxDzY24mcTUdzOKUpjIGsl8qGkxuCXrHotuefWpIpO2Kld0txe35ZFvBqWTu~0q7Gkn8--DUFRE3M3Oktv0W-o4sg6iOZQ~7rp5zOgPdP6aBoW1RSwxCH2zS32i1ZGLcmL6wAQUGdFqYWOhkZ1D7kVlXOHHIosoIBzjnyGsTGyWmf2Rc9u4lK3mepcthu8ySHN5pGEdgsu8w~0uz0bwzVI4zv1ejQ76NTHgDtFYlGGYybezsIOt3SI4gEtTODSAieu7KP8Cug__" alt="" />
              <div className='bg-[#D9D9D9] w-[69px] h-[10px] rounded-sm'></div>
            </span>
            <span className='flex justify-center items-center gap-2'>
              1
              <img className='w-[11px] h-[10px]' src="https://s3-alpha-sig.figma.com/img/0545/2915/ecc7650c5e2b552f269bd6d65effcc24?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vj8EdmVQoi5rrriqOKd6T~lJd98mV5MQjzD8ZEqJDHZiIAkhiVtj5QHv68smrtWOo7E5Q88SM1YjQfxDzY24mcTUdzOKUpjIGsl8qGkxuCXrHotuefWpIpO2Kld0txe35ZFvBqWTu~0q7Gkn8--DUFRE3M3Oktv0W-o4sg6iOZQ~7rp5zOgPdP6aBoW1RSwxCH2zS32i1ZGLcmL6wAQUGdFqYWOhkZ1D7kVlXOHHIosoIBzjnyGsTGyWmf2Rc9u4lK3mepcthu8ySHN5pGEdgsu8w~0uz0bwzVI4zv1ejQ76NTHgDtFYlGGYybezsIOt3SI4gEtTODSAieu7KP8Cug__" alt="" />
              <div className='bg-[#D9D9D9] w-[69px] h-[10px] rounded-sm'></div>
            </span>
            <span className='flex justify-center items-center gap-2'>
              1
              <img className='w-[11px] h-[10px]' src="https://s3-alpha-sig.figma.com/img/0545/2915/ecc7650c5e2b552f269bd6d65effcc24?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vj8EdmVQoi5rrriqOKd6T~lJd98mV5MQjzD8ZEqJDHZiIAkhiVtj5QHv68smrtWOo7E5Q88SM1YjQfxDzY24mcTUdzOKUpjIGsl8qGkxuCXrHotuefWpIpO2Kld0txe35ZFvBqWTu~0q7Gkn8--DUFRE3M3Oktv0W-o4sg6iOZQ~7rp5zOgPdP6aBoW1RSwxCH2zS32i1ZGLcmL6wAQUGdFqYWOhkZ1D7kVlXOHHIosoIBzjnyGsTGyWmf2Rc9u4lK3mepcthu8ySHN5pGEdgsu8w~0uz0bwzVI4zv1ejQ76NTHgDtFYlGGYybezsIOt3SI4gEtTODSAieu7KP8Cug__" alt="" />
              <div className='bg-[#D9D9D9] w-[69px] h-[10px] rounded-sm'></div>
            </span>

          </div>
        </div>
      </div>

    </>
  )
}

export default ProductDetails
