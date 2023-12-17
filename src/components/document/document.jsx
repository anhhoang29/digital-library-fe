import { React, useEffect, useState } from 'react';
import { Grid, Typography } from "@material-ui/core";
import { title } from 'process';
import ReactPaginate from 'react-paginate';
import { Carousel } from 'flowbite-react';
import { getDocument } from 'pdfjs-dist';
import { getAllDocumentsForGuest } from '../../api/main/documentAPI';

// const documentList = [

//   {
//     "docId": "c0a801b7-8b90-1484-818b-90f74ec70004",
//     "docName": "Các nguyên lý cơ bản",
//     "totalView": 1,
//     "author": null,
//     "thumbnail": "https://drive.google.com/file/d/1dnJFe4gLYOpY6JUjGzm6Tyz5bJrl_yfj/view?usp=drivesdk",
//   },
//   {
//     "docId": "c0a801b7-8b90-1484-818b-90f74ec70004",
//     "docName": "Các nguyên lý cơ bản",
//     "totalView": 1,
//     "author": null,
//     "thumbnail": "https://drive.google.com/file/d/1dnJFe4gLYOpY6JUjGzm6Tyz5bJrl_yfj/view?usp=drivesdk",
//   },
//   {
//     "docId": "c0a801b7-8b90-1484-818b-90f74ec70004",
//     "docName": "Các nguyên lý cơ bản",
//     "totalView": 1,
//     "author": null,
//     "thumbnail": "https://drive.google.com/file/d/1dnJFe4gLYOpY6JUjGzm6Tyz5bJrl_yfj/view?usp=drivesdk",
//   },
//   {
//     "docId": "c0a801b7-8b90-1484-818b-90f74ec70004",
//     "docName": "Các nguyên lý cơ bản",
//     "totalView": 1,
//     "author": null,
//     "thumbnail": "https://drive.google.com/file/d/1dnJFe4gLYOpY6JUjGzm6Tyz5bJrl_yfj/view?usp=drivesdk",
//   },
//   {
//     "docId": "c0a801b7-8b90-1484-818b-90f74ec70004",
//     "docName": "Các nguyên lý cơ bản",
//     "totalView": 1,
//     "author": null,
//     "thumbnail": "https://drive.google.com/file/d/1dnJFe4gLYOpY6JUjGzm6Tyz5bJrl_yfj/view?usp=drivesdk",
//   },
//   {
//     "docId": "c0a801b7-8b90-1484-818b-90f74ec70004",
//     "docName": "Các nguyên lý cơ bản",
//     "totalView": 1,
//     "author": null,
//     "thumbnail": "https://drive.google.com/file/d/1dnJFe4gLYOpY6JUjGzm6Tyz5bJrl_yfj/view?usp=drivesdk",
//   },
//   {
//     "docId": "c0a801b7-8b90-1484-818b-90f74ec70004",
//     "docName": "Các nguyên lý cơ bản",
//     "totalView": 1,
//     "author": null,
//     "thumbnail": "https://drive.google.com/file/d/1dnJFe4gLYOpY6JUjGzm6Tyz5bJrl_yfj/view?usp=drivesdk",
//   },
//   {
//     "docId": "c0a801b7-8b90-1484-818b-90f74ec70004",
//     "docName": "Các nguyên lý cơ bản",
//     "totalView": 1,
//     "author": "Xuân Thành",
//     "thumbnail": "https://drive.google.com/file/d/1dnJFe4gLYOpY6JUjGzm6Tyz5bJrl_yfj/view?usp=drivesdk",
//   },
//   {
//     "docId": "c0a801b7-8b90-1484-818b-90f74ec70004",
//     "docName": "Các nguyên lý cơ bản",
//     "totalView": 1,
//     "author": null,
//     "thumbnail": "https://drive.google.com/file/d/1dnJFe4gLYOpY6JUjGzm6Tyz5bJrl_yfj/view?usp=drivesdk",
//   },
// ];



// get thumbnai drive to show image
const getThumbnail = (thumbnail) => {
  const url = thumbnail;
  const urlSplit = url.split('/');
  const urlId = urlSplit[5];
  const urlThumbnail = `https://drive.google.com/thumbnail?id=${urlId}`;
  return urlThumbnail;
};
function DocumentList(props) {
  const [documentList, setDocumentList] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllDocumentsForGuest();
          setDocumentList(response.data);
          setMessage("Lấy danh sách tài liệu thành công!");
          setTimeout(() => {
            setMessage("");
          }, 4000);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    console.log("Hoang Anh:", documentList); 
  }, [documentList]);

  useEffect(() => {
    console.log("In Thong Bao:", message);
  }, [message]);

  const itemsPerPage = 5;
  const pageCount = Math.ceil(documentList.length / itemsPerPage);
  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  const offset = currentPage * itemsPerPage;
  const currentPageData = documentList.slice(offset, offset + itemsPerPage);


  return (
    <>
      <Grid className="items-stretch overflow-x-auto flex justify-between gap-5 max-md:flex-wrap max-md:justify-center">
        {documentList.map((content, index) => (
          <div key={index} className="justify-center items-center bg-white flex grow basis-[0%] flex-col p-4 rounded-xl">
            <img loading="lazy" src={getThumbnail(content.thumbnail)} className="aspect-[0.76] object-contain object-center w-[130px] overflow-hidden self-center" />
            <div className="text-neutral-600 text-xs leading-4 self-stretch whitespace-nowrap mt-3">{content.docName}</div>
            <div className="text-neutral-600 text-xs leading-3 self-stretch whitespace-nowrap mt-1.5">{content.author}</div>
            <div className="text-neutral-400 text-xs leading-3 self-stretch whitespace-nowrap mt-1.5">
              <span className="text-neutral-600">{content.totalView}</span> <span className="text-neutral-400"></span>
            </div>
          </div>
        ))}
      </Grid>
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        breakLabel={'...'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'flex justify-center items-center mt-8'}
        activeClassName={'bg-blue-500 text-white'}
        pageClassName={'mr-2'}
        pageLinkClassName={'p-2 border rounded hover:bg-gray-200'}
        previousClassName={'mr-2'}
        previousLinkClassName={'p-2 border rounded hover:bg-gray-200'}
        nextClassName={'ml-2'}
        nextLinkClassName={'p-2 border rounded hover:bg-gray-200'}
      />

    </>
  );
}


export default DocumentList;
