import React, { useState } from 'react'
import type { UploadProps } from 'antd'
import { Button, message, Upload } from 'antd'

const props: UploadProps = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList)
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`)
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`)
    }
  },
}

function Uploads() {
  const [fileList, setFileList] = useState([]) // State to keep track of uploaded files

  const handleFileChange = (info) => {
    setFileList(info.fileList)
  }

  return (
    <>
      <h1 className="text-[14px] font-medium mb-[12px]">Lampirkan File</h1>
      <div className="flex">
        <Upload {...props} onChange={handleFileChange}>
          <Button
            className="p-5 w-[126px]"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Upload File
          </Button>
        </Upload>
        {fileList.length === 0 && ( // Display only if fileList is empty
          <p className="absolute ml-[134px] p-2 text-[#d9d9d9] md:text-[12px] md:ml-[130px]">
            Belum ada file yang terpilih
          </p>
        )}
      </div>
    </>
  )
}

export default Uploads
