function Download({to, label, Icon, download = "download"}){
    return (
        <div className="w-full py-5 flex justify-center md:justify-start items-center">
            <a 
            href= { to }
            target="_blank" 
            aria-label={ label }
            download={ download } 
            className="not-visited:w-fit flex justify-between items-center gap-2 bg-button text-button-text px-8 py-3 rounded-full hover:bg-button/80"
            rel="noopener noreferrer"
            >
                <Icon className="text-xl" /> 
                <span className="font-sans font-medium text-sm">{ label }</span>
            </a>
        </div>
    );
}

export default Download;