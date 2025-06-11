import logoEduaName from '../../assets/Images/logoEduaName.svg';
import { Inputs } from '../../Components/Inputs/Inputs';
import { Buttons } from '../../Components/Buttons/Buttons';
import { PdfViewer } from "./PdfViewer"
import { LuImageUp } from "react-icons/lu";
import { useLocation } from "wouter"
import { StateContext } from '../../Context/Context';
import { ModalConfirm } from '../../Components/Modals/ModalConfirm';
import { ToolTipReceptionist } from '../../Components/ToolTip/ToolTipReceptionist';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { toast, ToastContainer } from 'react-toastify';
import { useContext, useState, useRef } from 'react'
import { axiosInstance, cloudinaryAxios } from '../../../axiosConfig';

export const Pdf = () => {
  const [, setLocation] = useLocation()
  const { viewConfirmModal, setViewConfirmModal } = useContext(StateContext)
  const [imgCloud, setImgCloud] = useState(null)
  const [fileSaveUrl, setFileSaveUrl] = useState(null)
  const getInputValueDate = useRef();

  const imgUp = async (e) => {

    if (e.target.files[0]) {
      setImgCloud(URL.createObjectURL(e.target.files[0]));
      setFileSaveUrl(e.target.files[0]);
    }
  };

  const imgUpload = async () => {
    const formData = new FormData();
    formData.append("file", fileSaveUrl);
    formData.append("upload_preset", "edua_at");
    console.log("img url:" + fileSaveUrl);

    try {
      const response = await cloudinaryAxios.post("/image/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.status === 200 || response.status === 201) {
        registerDriveCap(response.data.secure_url);
        setViewConfirmModal(false)
      }
    } catch (error) {
      setViewConfirmModal(false)
      console.log("error:" + error);

      toast.error("Error al subir la imagen:", {
        progressStyle: {
          backgroundColor: '#ed1b24',
        },
      });
    }
  }

  const registerDriveCap = async (img) => {
    let hour = new Date();
    const createDriveCap = {
      date: getInputValueDate.current.value,
      hour: hour.getHours() + ":" + hour.getMinutes(),
      img: img,
      foreignKeyReceptionist: 109236439,
    };

    if (img !== null) {

      try {

        const response = await axiosInstance.post('drivecap/register', createDriveCap)
        if (response.status == 200 || response.status == 201) {
          toast.success("Se envió exitosamente al área técnica", {
            progressStyle: {
              backgroundColor: '#50e136',
            },
          });

          setViewConfirmModal(false)
          setImgCloud(null);
          const responseLastId = await axiosInstance.get('drivecap/drivecap/drivecaplastid')
          registerHistorial(responseLastId.data.id, responseLastId.data.date, responseLastId.data.img)
          registerNotifications(responseLastId.data.id, responseLastId.data.date, responseLastId.data.img)
          
        }
      } catch (error) {
        setViewConfirmModal(false);

        toast.error(error.response.data.error, {
          progressStyle: {
            backgroundColor: '#ed1b24',
          },
        });
      }

    } else {
      toast.error("¡Ups! Parece que olvidaste subir el archivo", {
        progressStyle: {
          backgroundColor: '#ed1b24',
        },
      });
      setViewConfirmModal(false)
    }
  }

  const registerHistorial = async (idForeign, date, img) => {
    const dataHistorial = {
      tittle: "Has enviado una captura Drive al área técnica",
      text: "Recepcionista, enviaste una captura Drive al director del área técnica el día: "+ date,
      img: img,
      foreignkeyDrive: idForeign,
    }

    try {
      const response = await axiosInstance.post("historial/register", dataHistorial)
    } catch (error) {
      console.log(error);

      toast.error(error.response.data.error, {
        progressStyle: {
          backgroundColor: '#ed1b24',
        },
      });
    }

  }

  const registerNotifications = async (idForeign, date, img) => {
    const dataNotifications = {
      tittle: "Tienes una nueva notifcación de una captura drive", 
      img: img,      
      text: "te ha enviado una nueva captura Drive el día: " + date ,
      foreignKeyDrive: idForeign,
    }

    try {
      const response = await axiosInstance.post("notifications/register", dataNotifications)
    } catch (error) {
      console.log(error);
      
      toast.error(error.response.data.error, {
        progressStyle: {
          backgroundColor: '#ed1b24',
        },
      });
    }
  }

  const clickButton = () => {
    setLocation(`/receptionist`)
  }
  return (
    <>
      <div className="bg-white h-screen relative">
        <div className="absolute top-4 left-[45%]">
          <img src={logoEduaName} alt="logo" className="w-[140px] h-[40px]" />
        </div>
        <ToolTipReceptionist />
        <div className='absolute z-30 top-2 left-3'>
          <IoIosArrowRoundBack onClick={clickButton} className='cursor-pointer w-10 h-10 hover:scale-125' />
        </div>
        <div className='flex justify-center mt-[5rem]'>
          <Inputs inputRef={getInputValueDate} classP={`w-[20rem] focus:outline-none border-0 border-b-2 border-solid border-[#434343]`}
            type={"date"}
            nameInputs={"Date"}
            placeholder={"Ingresa aquí el radicado de la solicitud"} />
        </div>
        <div className="bg-[#efefef] w-[90%] flex justify-center items-center mx-14 mt-10 border rounded-xl flex-col">
          <div className='w-[95%] flex justify-center items-center mt-4 flex-col mb-4 outline-2 outline-offset-2 outline-dashed outline-[#3d4141] relative'>
            <PdfViewer fileUrl={imgCloud} />
            <LuImageUp className={`w-[224px] h-[18rem] p-8 text-[#666666] mt-4  ${imgCloud ? "animationIslam " : ""}`} />
            <div className='mb-[12px]'>
              <Inputs classP={`hidden`}
                type={"file"}
                id={"InputPdf"}
                nameInputs={"Pdf"}
                inputValue={imgUp}
                accept={"image/png, image/jpeg"}
              />
              <label className='w-[20rem] text-center text-[20px] text-[#666666] underline font-semibold cursor-pointer pt-2 pb-2 rounded-sm transition-all duration-300 hover:scale-105 hover:text-black mb-[30px]' htmlFor="InputPdf"> {imgCloud ? ` Archivo cargado: ${fileSaveUrl.name} ` : 'Subir desde este equipo'}</label>
            </div>
          </div>
        </div>
        <div className='flex justify-center mt-[20px] w-[100%]'>
          <Buttons label={"Enviar al área técnica"} buttonEvent={() => { setViewConfirmModal(true) }} btnStyle={"bg-[#D9D9D9] w-[200px] mb-[30px]"} />
        </div>
      </div>
      <ModalConfirm
        visibility={viewConfirmModal}
        handleButtonClickConfirm={imgUpload}
        message="¿Deseas enviar al área técnica el archivo?"
      />
      <div>
        <ToastContainer
          position='top-center'
          autoClose={2000}
        />
      </div>
    </>
  )
}