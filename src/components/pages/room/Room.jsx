import { useParams } from "react-router-dom"
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
const Room = () => {
    const {roomId} = useParams();

    const myMeeting = async(element) =>{
        const appId = 281002978 ;
        const serverSecret = '50ea9f57fc8e7d1672865203b125f6a2';
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appId,serverSecret,roomId,Date.now().toString() ,"Sukanya K P")
        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container : element ,
            sharedLinks : [
                {
                    name : 'Copy Link',
                    url : `http://localhost:3000/room/${roomId}`
                }
            ],
            scenario : {
                mode : ZegoUIKitPrebuilt.OneONoneCall,
            },
            showScreenSharingButton : false,

        })
    }

  return (
    <>
    <div  ref={myMeeting}/>
    </>
  )
}

export default Room
