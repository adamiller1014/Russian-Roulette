import React from 'react';
import ShadowButton from '../../../shared/ShadowButton';

interface BonusModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectBonus: (bonusType: string) => void;
}

const BonusModal: React.FC<BonusModalProps> = ({ isOpen, onClose, onSelectBonus }) => {
  if (!isOpen) return null;

  const bonusTypes = ['Small Bonus', 'Medium Bonus', 'Large Bonus', 'Mega Bonus'];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#2c3137] rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-white mb-4">Select a Bonus</h2>
        <div className="grid grid-cols-2 gap-4">
          {bonusTypes.map((bonus) => (
            <ShadowButton
              key={bonus}
              onClick={() => onSelectBonus(bonus)}
              className="bg-[#f8bf60] text-black p-4 rounded-md hover:brightness-110 transition-all duration-200"
            >
              {bonus}
            </ShadowButton>
          ))}
        </div>
        <ShadowButton
          onClick={onClose}
          className="mt-6 w-full bg-[#1c2127] text-white p-2 rounded-md hover:bg-[#21262c] transition-all duration-200"
        >
          Close
        </ShadowButton>
      </div>
    </div>
  );
};

export default React.memo(BonusModal);