


const ProfileInfo = ({icon,userInfo, onLogout}) => {
  
  return (
    <div className="flex items-center gap-3">
        <div className="w-12 h-12 flex items-center justify-center rounded-full text-slate-100 font-medium bg-slate-100">
            <img
                className="rounded-full"
                src= {icon}
                alt={'Profile Icon'}
            />
        </div>
        <p className="text-sm font-medium">{"Welcome!!"}</p>
        <button className="text-sm text-slate-700 underline" onClick={onLogout}>LogOut</button>

    </div>
  )
}

export default ProfileInfo