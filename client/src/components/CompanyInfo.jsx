/* eslint-disable react/prop-types */
import { Label, Select } from 'flowbite-react';

function CompanyInfo({ formData, setFormData }) {
    return (
        <div className="">
            <div className=" mb-2">
                <Label className="font-bold" htmlFor="division"><span className=' text-xl text-red-700'>*</span>Division</Label>
                <Select
                    id="division"
                    required
                    className="felx-2"
                    value={formData.division}
                    onChange={(e) =>
                        setFormData({ ...formData, division: e.target.value })
                    }
                >
                    <option></option>
                    <option value="pc">PC</option>
                    <option value="lc">LC</option>
                    <option value="att">ATT</option>
                    <option value="os">OS</option>
                    <option value="fs">FS</option>
                </Select>
            </div>
            <div className=" mb-2">
                <Label className="font-bold" htmlFor="category"><span className=' text-xl text-red-700'>*</span>Category</Label>
                <Select
                    id="category"
                    required
                    className="felx-2"
                    value={formData.category}
                    onChange={(e) =>
                        setFormData({ ...formData, category: e.target.value })
                    }
                >
                    <option></option>
                    <option value="alpha">Alpha</option>
                    <option value="executive">Executive</option>
                    <option value="normal">Normal</option>
                    <option value="trainee">Trainee</option>
                </Select>
            </div>
            <div className=" mb-2">
                <Label className="font-bold" htmlFor="company"><span className=' text-xl text-red-700'>*</span>Company</Label>
                <Select
                    id="company"
                    required
                    className="felx-2"
                    value={formData.company}
                    onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                    }
                >
                    <option></option>
                    <option >EPPL</option>
                    <option >PMO</option>
                    <option >PMS</option>
                    <option >EPC</option>
                    <option >PCS</option>
                    <option>EPPLG</option>
                </Select>
            </div>
        </div>
    );
}

export default CompanyInfo;