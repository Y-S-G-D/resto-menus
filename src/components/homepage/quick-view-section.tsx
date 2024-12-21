'use client'
import { Modal, Radio, Button } from "flowbite-react";
import { useState } from "react";

interface QuickViewProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuickViewSection: React.FC<QuickViewProps> = ({
  isOpen,
  onClose,
}) => {
  const [selectedQuantity, setSelectedQuantity] = useState<string>("500 Gram");
  const [itemCount, setItemCount] = useState<number>(1);

  const handleQuantityChange = (value: string) => {
    setSelectedQuantity(value);
  };

  return (
    <Modal
      show={isOpen}
      onClose={onClose}
      size="md"
      position="bottom-center"
      className="md:!top-0 absolute !top-[400px] flex items-end justify-center z-[2000]"
    >
      {/* Header */}
      <Modal.Header>
        <h2 className="text-lg font-semibold">Customise as per your taste</h2>
      </Modal.Header>

      {/* Body */}
      <Modal.Body>
        <div>
          <h3 className="text-sm font-semibold">Quantity</h3>
          <p className="text-gray-500 text-xs mb-3">Select any 1</p>
          <div>
            {[
              { label: "500 Gram", price: 310 },
              { label: "1 Kg", price: 640 },
              { label: "1.5 Kg", price: 1130 },
              { label: "2 Kg", price: 1710 },
              { label: "2.5 Kg", price: 1710 },
            ].map((option) => (
              <div
                key={option.label}
                className="flex justify-between items-center py-2"
              >
                <div>
                <Radio
                  id={option.label}
                  value={option.label}
                  checked={selectedQuantity === option.label}
                  onChange={() => handleQuantityChange(option.label)}
                />
                <label htmlFor={option.label} className="ml-2">
                  {option.label}
                </label>
                </div>
                <span className="text-sm text-gray-500">+₹{option.price}</span>
              </div>
            ))}
          </div>
        </div>
      </Modal.Body>

      {/* Footer */}
      <Modal.Footer className="flex justify-between items-center">
        <div className="flex items-center">
          <button
            onClick={() => setItemCount(Math.max(1, itemCount - 1))}
            className="px-4 py-2 bg-gray-200 rounded-full text-sm font-bold"
          >
            -
          </button>
          <span className="mx-4">{itemCount}</span>
          <button
            onClick={() => setItemCount(itemCount + 1)}
            className="px-4 py-2 bg-gray-200 rounded-full text-sm font-bold"
          >
            +
          </button>
        </div>
        <Button
          onClick={() => console.log("Add Item")}
          className="bg-secondary text-white px-6 py-2 rounded-lg"
        >
          Add Item ₹{399 * itemCount}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default QuickViewSection;
