import { React } from 'react';

const SliderList = [
    {
        id: 1,
        title: "Today's Quote",
        text: "Đọc sách giúp bạn có thêm nhiều kiến thức và kinh nghiệm",
        author: "Bill Gates",
    },
    {
        id: 2,
        title: "Today's Quote",
        text: "Đọc sách là cách tốt nhất để mở rộng tâm trí của bạn",
        author: "Michelle Obama",
    },
    {
        id: 3,
        title: "Today's Quote",
        text: "Đọc sách là cách tốt nhất để mở rộng tâm trí của bạn",
        author: "Michelle Obama",
    }
]

function SliderComponent(props) {
    return (
        <div className="ml-12 flex max-w-[547px] flex-col items-stretch py-9 rounded-xl bg-gradient-to-b from-yellow-400 to-red-500">
            <header className="flex w-full flex-col px-9 items-end max-md:max-w-full max-md:px-5">
                <h2 className="text-white text-2xl font-medium leading-8 self-stretch max-md:max-w-full">
                    Today's Quote
                </h2>
                <div className="text-white text-xl leading-8 self-stretch mt-7 max-md:max-w-full">
                    "There is more treasure in books than in all the pirate's loot on Treasure Island."
                </div>
                <p className="text-white text-right text-xl leading-6 w-[524px] mt-9" aria-label="Author">
                    -Walt Disney
                </p>
            </header>
            <div className="justify-between items-stretch flex w-[70px] max-w-full gap-2.5 ml-9 self-start max-md:justify-center max-md:ml-2.5">
                <div className="stroke-[1px] flex shrink-0 h-2.5 flex-col flex-1 rounded-[50%]" />
                <div className="stroke-[1px] flex shrink-0 h-2.5 flex-col flex-1 rounded-[50%]" />
                <div className="stroke-[1px] flex shrink-0 h-2.5 flex-col flex-1 rounded-[50%]" />
                <div className="stroke-[1px] flex shrink-0 h-2.5 flex-col flex-1 rounded-[50%]" />
            </div>
        </div>
    );
}

export default SliderComponent;