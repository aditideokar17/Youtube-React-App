import Button from "./Button";

const ButtonList = () =>{

    const list = ["All","Gaming","Song","Live","Cricket","Soccer","Valentines","Cooking", "Padcasts", "Mixes", "Lessons"];

    return(
        <div className="flex gap-5">
           {list.map((listItem,i) => {
            return <Button key={i} name={listItem} />
           })}
        </div>
    )
};

export default ButtonList;